import { assert } from 'chai';
import { User as TypeUser } from '../../types/user';
import { TestFactory } from '../factory';
import { describe, it } from 'mocha';
import { WRONG_AUTHENTICATION } from '../../constant/flag';
import { mockTestUser, testUserModified } from '../../__mocks__/user';
describe('User admin wants to login', () => {
    const factory: TestFactory = new TestFactory();
    const testUser: TypeUser = mockTestUser;
    delete testUser.firstName;
    delete testUser.lastName;

    const URL = `/api/v1/authentication/login`;

    before(async () => {
        await factory.init();
    });

    after(async () => {
        await factory.close();
    });

    describe('[Auth] POST /login', () => {
        it('response with no body data', done => {
            factory.app
                .post(URL)
                .send()
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400, done);
        });

        it('response with login user already exists', done => {
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
                        const result = res.body.result;

                        // Assert status
                        assert(success === true, 'status does not match');

                        // Assert user
                        assert.isObject(result, 'user should be an object');
                        assert.isString(result.token, 'token should be an string');
                        assert.isString(result.refreshToken, 'token should be an string');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });

        it('response without user already exists', done => {
            factory.app
                .post(URL)
                .send(testUserModified)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(403)
                .end((err, res) => {
                    try {
                        if (err) throw err;
                        const { success, flag, message } = res.body;

                        // Assert status
                        assert(success === false, 'status does not match');
                        assert(flag === WRONG_AUTHENTICATION.flag, 'flag does not match');
                        assert(message === WRONG_AUTHENTICATION.message, 'message does not match');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });
    });
});
