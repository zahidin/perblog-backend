const login = {
    tags: ['Authentication'],
    description: 'Register for user admin content',
    operationId: 'register',
    requestBody: {
        required: 'true',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        username: { type: 'string', example: 'alex01' },
                        password: { type: 'string', example: '123qwe' },
                        firstName: { type: 'string', example: 'Alexander' },
                        lastName: { type: 'string', example: 'Kusni' },
                    },
                    required: ['username', 'password', 'firstName', 'lastName'],
                },
            },
        },
    },
    responses: {
        '200': {
            description: 'Result correct username password',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/definitions/User',
                    },
                },
            },
        },
    },
};

export default login;
