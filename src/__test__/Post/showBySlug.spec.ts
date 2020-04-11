import { assert } from 'chai';
import { Post } from '../../types/post';
import { TestFactory } from '../factory';
import { describe, it } from 'mocha';
import { mockTestPost } from '../../__mocks__/post';
import { NOT_FOUND } from '../../constant/flag';

describe('User admin show post by slug', () => {
    const factory: TestFactory = new TestFactory();

    const testPost: Post = mockTestPost;

    const URL = `/api/v1/post/${testPost.slug}`;

    before(async () => {
        await factory.init();
    });

    after(async () => {
        await factory.close();
    });

    describe('[Post] GET /POST', () => {
        it('response with correct slug', done => {
            factory.app
                .get(URL)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    try {
                        const { success } = res.body;
                        const result: Post = res.body.result;

                        assert(success === true, 'status does not match');
                        assert.isObject(result, 'result should be an array');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });

        it('response with incorrect slug', done => {
            factory.app
                .get(`${URL}incorrect`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(500)
                .end((err, res) => {
                    try {
                        const { success, flag, message } = res.body;
                        const result: Post = res.body.result;

                        assert(success === false, 'status does not match');
                        assert(flag === NOT_FOUND.flag, 'flag does not match');
                        assert(message === NOT_FOUND.message, 'message does not match');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });
    });
});
