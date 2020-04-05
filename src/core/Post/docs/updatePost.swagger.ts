const updatePost = {
    tags: ['Post'],
    description: 'update post',
    operationId: 'updatePost',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        required: 'true',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        title: { type: 'string', example: 'Pademic Corona' },
                        date: { type: 'string', example: '17/10/2021' },
                        content: {
                            type: 'string',
                            example: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        },
                        tags: {
                            type: 'string',
                            example: 'health',
                        },
                    },
                    required: ['title', 'date', 'content', 'tags'],
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
    },
};

export default updatePost;
