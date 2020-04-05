const showPostBySlug = {
    tags: ['Post'],
    description: 'show post by slug',
    operationId: 'showPostBySlug',
    parameters: [
        {
            name: 'slug',
            in: 'path',
            description: 'The slug that needs to be fetched. Use pademic-corona for testing. ',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Result show post by slug',
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
                                $ref: '#/definitions/Post',
                            },
                        },
                    },
                },
            },
        },
        '500': {
            description: 'Result show post by slug not found',
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
                                example: 'NOT_FOUND',
                            },
                            message: {
                                type: 'string',
                                example: 'Success',
                            },
                        },
                    },
                },
            },
        },
    },
};

export default showPostBySlug;
