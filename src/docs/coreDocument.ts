import PostDocument from '@/core/Post/docs';
import AuthDocument from '@/core/Auth/docs';

const coreDocument = {
    tags: [PostDocument.tags, AuthDocument.tags],
    paths: {
        ...AuthDocument.paths,
        ...PostDocument.paths,
    },
    securityDefinitions: {
        bearerAuth: {
            type: 'bearerAuth',
            in: 'header',
            name: 'authorization',
            description: 'Enter your bearer token in the format **Bearer &lt;token>**',
        },
    },
    definitions: {
        ...PostDocument.definitions,
        ...AuthDocument.definitions,
    },
};

export default coreDocument;
