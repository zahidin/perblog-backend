const logout = {
    tags: ['Authentication'],
    description: 'Logout for user admin content with token jwt',
    operationId: 'logout',
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
                                example: 'true',
                            },
                            message: {
                                type: 'string',
                                example: 'Success',
                            },
                            result: {
                                type: 'object',
                                properties: {
                                    username: {
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
    },
};

export default logout;
