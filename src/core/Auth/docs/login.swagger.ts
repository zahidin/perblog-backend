const login = {
    tags: ['Authentication'],
    description: 'Login for user admin content',
    operationId: 'login',
    requestBody: {
        required: 'true',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        username: { type: 'string', example: 'tester001' },
                        password: { type: 'string', example: '123qwe' },
                    },
                    required: ['username', 'password'],
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
                                    token: {
                                        type: 'string',
                                        example:
                                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXZva2VUb2tlbiI6MCwiaWQiOiI1ZTg0Y2FhZTk2NGY4MDMxYjQwNWViZTAiLCJ1c2VybmFtZSI6InRlc3QwMDEiLCJmaXJzdE5hbWUiOiJ0ZXN0IiwibGFzdE5hbWUiOiIwMDEiLCJyZWZyZXNoVG9rZW4iOiJYeDNKTHJxU3g3ZEdZZUlXQmlCWVNwdkZWUFY3ZE13MU5DQUJ3SkpqMVlqZ0xMNHlaTE5nM3h0Z3dIcGhrelVZSlI5M1AzcnU0clQ1eWN5bjJtbWU5N1ZKQzZITFVXWk1FazVCIiwiaWF0IjoxNTg1OTk0MDM5LCJleHAiOjE1ODU5OTQwNDJ9.trm_JWDO2n3LPrveMkHaxXcvek9G9VgtEVcsCiSiFgo',
                                    },
                                    refreshToken: {
                                        type: 'string',
                                        example:
                                            '4ovQNyPCNLp5XEFYWimvMFbvI1x3DzlO5vpvhwsMOjVdqKH08IisQV9kFgpjtnwCMkGMC19WtUuvUzMluh4f9eEZXZwoomeWY5ky',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        '403': {
            description: 'Result incorrect username password ',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            success: {
                                type: 'boolean',
                                example: 'false',
                            },
                            flag: {
                                type: 'string',
                                example: 'WRONG_AUTHENTICATION',
                            },
                            message: {
                                type: 'string',
                                example: 'The username or password you entered is incorrect. Please try again later',
                            },
                        },
                    },
                },
            },
        },
    },
};

export default login;
