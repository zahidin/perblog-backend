import config from '@/config/app';
import coreDocument from './coreDocument';

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Perblog API Document',
        description: 'With documents makes it easy to you understand',
        termsOfService: '',
        contact: {
            name: 'Muhammad Zahidin Nur',
            email: 'zahidin98@gmail.com',
            url: 'https://github.com/zahidin',
        },
        license: {
            name: 'Me',
            url: 'https://github.com/zahidin/api-perblog',
        },
    },
    servers: [
        {
            url: `http://localhost:${config.APP_PORT}/api/v1`,
            description: 'Local server',
        },
    ],
    components: {
        schemas: {},
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    ...coreDocument,
};

export default swaggerDocument;
