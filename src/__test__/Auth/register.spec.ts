import { assert } from 'chai';
import { User as TypeUser } from '../../types/user';
import { TestFactory } from '../factory';
import { describe, it } from 'mocha';
import { mockTestUser } from '../../__mocks__/user';

describe('User admin wants to register', () => {
    const factory: TestFactory = new TestFactory();
    const testUser: TypeUser = mockTestUser;
    const URL = `/api/v1/authentication/register`;

    before(async () => {
        await factory.init();
    });

    after(async () => {
        await factory.close();
    });

    describe('[Auth] POST /register', () => {
        it('response with no body data', done => {
            factory.app
                .post(URL)
                .send()
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400, done);
        });

        it('response with new user', done => {
            factory.app
                .post(URL)
                .send(testUser)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    try {
                        if (err) throw err;
                        const { success } = res.body;
                        const user: TypeUser = res.body.result;

                        // Assert status
                        assert(success === true, 'status does not match');

                        // Assert user
                        assert.isObject(user, 'user should be an object');
                        assert(user.username === testUser.username, 'username does not match');
                        assert(user.firstName === testUser.firstName, 'firstname does not match');
                        assert(user.lastName === testUser.lastName, 'lastname does not match');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });

        it('response with user already exists', done => {
            factory.app
                .post(URL)
                .send(testUser)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(500)
                .end((err, res) => {
                    try {
                        if (err) throw err;
                        const { success, flag } = res.body;

                        // Assert status
                        assert(success === false, 'status does not match');
                        assert(flag === 'FAILED', 'flag does not match');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });
    });
});
