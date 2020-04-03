/*
    |--------------------------------------------------------------------------
    | Flag is message marker for response
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default flag error used by
    | the response class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these flag here.
    |
*/

export const WRONG_AUTHENTICATION = {
    flag: 'WRONG_AUTHENTICATION',
    message: 'The username or password you entered is incorrect. Please try again later',
};

export const NOT_FOUND = {
    flag: 'NOT_FOUND',
    message: 'Data was not found.',
};

export const SERVER_ERROR = {
    flag: 'SERVER_ERROR',
    message: 'Server is busy.',
};

export const ACCESS_DENIED = {
    flag: 'ACCESS_DENIED',
    message: 'Acces denied.',
};

export const SUCCESS = {
    flag: 'SUCCESS',
    message: 'Success',
};

export const FAILED = {
    flag: 'FAILED',
    message: 'Failed',
};
