const showPost = {
    tags: ['Post'],
    description: 'show post',
    operationId: 'showPost',
    responses: {
        '200': {
            description: 'Result show all',
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
                                type: 'array',
                                items: {
                                    $ref: '#/definitions/Post',
                                },
                            },
                        },
                    },
                },
            },
        },
        '500': {
            description: 'Result show post but data not found',
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

export default showPost;
