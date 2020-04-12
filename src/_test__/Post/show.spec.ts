import { assert } from 'chai';
import { Post } from '../../types/post';
import { TestFactory } from '../factory';
import { describe, it } from 'mocha';

describe('User admin show all post', () => {
    const factory: TestFactory = new TestFactory();

    const URL = `/api/v1/post`;

    before(async () => {
        await factory.init();
    });

    after(async () => {
        await factory.close();
    });

    describe('[Post] GET /POST', () => {
        it('response with get all post', done => {
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
                        assert.isArray(result, 'result should be an array');
                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });
    });
});
