import { assert } from 'chai';
import { User as TypeUser } from '../../types/user';
import { TestFactory } from '../factory';
import { describe, it } from 'mocha';
import { ACCESS_DENIED } from '../../constant/flag';
import { generateToken } from '../../utils/jwt';
import { mockTestUser } from '../../_mocks_/user';

describe('User admin wants to logout', () => {
    const factory: TestFactory = new TestFactory();
    const testUser: TypeUser = mockTestUser;
    const token = `Bearer ${generateToken(testUser)}`;
    const URL = `/api/v1/authentication/logout`;

    before(async () => {
        await factory.init();
    });

    after(async () => {
        await factory.close();
    });

    describe('[Auth] POST /logout', () => {
        it('response with no header authentication', done => {
            factory.app
                .post(URL)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401, done);
        });

        it('response with token correct', done => {
            factory.app
                .post(URL)
                .set('authorization', token)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    try {
                        if (err) throw err;
                        const { success, message } = res.body;
                        const result = res.body.result;

                        // Assert status
                        assert(success === true, 'status does not match');
                        assert(message === 'Success', 'message does not match');

                        // Assert user
                        assert.isObject(result, 'result should be an object');
                        assert.isTrue(result.success === 1, 'result success should be 1 or 0');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });

        it('response with token incorrect', done => {
            factory.app
                .post(URL)
                .set('authorization', `${token}s`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401)
                .end((err, res) => {
                    try {
                        if (err) throw err;
                        const { success, flag, message } = res.body;

                        // Assert status
                        assert(success === false, 'status does not match');
                        assert(flag === ACCESS_DENIED.flag, 'flag does not match');
                        assert(message === ACCESS_DENIED.message, 'message does not match');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });
    });
});
