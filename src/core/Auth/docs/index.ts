import login from './login.swagger';
import register from './register.swagger';
import logout from './logout.swagger';

const authenticationDocument = {
    tags: {
        name: 'Authentication',
    },
    paths: {
        '/login': {
            post: login,
        },
        '/register': {
            post: register,
        },
        '/logout': {
            post: logout,
        },
    },
    definitions: {
        User: {
            type: 'object',
            properties: {
                firstName: {
                    type: 'string',
                    example: 'Adelio',
                },
                lastName: {
                    type: 'string',
                    example: 'Aciel',
                },
                username: {
                    type: 'string',
                    example: 'tester001',
                },
                password: {
                    type: 'string',
                    example: '123qwe',
                },
                id: {
                    type: 'string',
                    example: '5e8961fd9c6cf9284c07d53f',
                },
            },
        },
    },
};

export default authenticationDocument;
