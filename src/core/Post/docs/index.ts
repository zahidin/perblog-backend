import createPost from './createPost.swagger';
import showPost from './showPost.swagger';
import showPostBySlug from './showPostBySlug.swagger';
import updatePost from './updatePost.swagger';
import deletePost from './deletePost.swagger';

const postDocument = {
    tags: {
        name: 'Post',
    },

    paths: {
        '/post': {
            post: createPost,
        },
        '/posts': {
            get: showPost,
        },
        '/post/{slug}': {
            get: showPostBySlug,
            put: updatePost,
        },
        '/post/{id}': {
            delete: deletePost,
        },
    },
    definitions: {
        Post: {
            type: 'object',
            properties: {
                title: {
                    type: 'string',
                    example: 'Pademic Corona',
                },
                date: {
                    type: 'string',
                    example: '17/10/2021',
                },
                content: {
                    type: 'string',
                    example: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                },
                tags: {
                    type: 'string',
                    example: 'health',
                },
                slug: {
                    type: 'string',
                    example: 'pademic-corona',
                },
                createAt: {
                    type: 'string',
                    example: '2020-04-04T10:28:32.868Z',
                },
                updateAt: {
                    type: 'string',
                    example: '2020-04-04T10:28:32.868Z',
                },
                id: {
                    type: 'string',
                    example: '5e8961fd9c6cf9284c07d53f',
                },
            },
        },
    },
};

export default postDocument;
