const deletePost = {
    tags: ['Post'],
    description: 'delete post',
    operationId: 'deletePost',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'Result correct username password',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            success: {
                                type: 'boolean',
                                example: true,
                            },
                            message: {
                                type: 'string',
                                example: 'Success',
                            },
                            result: {
                                type: 'object',
                                properties: {
                                    success: {
                                        type: 'boolean',
                                        example: 1,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '403': {
            description: 'Result do not use tokens',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            success: {
                                type: 'boolean',
                                example: false,
                            },
                            flag: {
                                type: 'string',
                                example: 'ACCESS_DENIED',
                            },
                            message: {
                                type: 'object',
                                example: 'Access Denied',
                            },
                        },
                    },
                },
            },
        },
    },
};

export default deletePost;
