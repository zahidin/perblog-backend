import AuthRepository from '../repository/authRepository';
import { User } from '@/types/user';
import { generateToken, generateRefreshToken, checkJwt } from '@/utils/jwt';
import { checkingPassword, encryptPassword } from '@/utils/bcrypt';
import { WRONG_AUTHENTICATION, FAILED, NOT_FOUND } from '@/constant/flag';

export default class AuthService {
    public authRepository: AuthRepository;

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    public login(data: User): Promise<string | {}> {
        return new Promise(async (resolve, reject) => {
            try {
                const refreshToken = generateRefreshToken();
                const getUserInfo: User = await this.authRepository.findOne({ username: data.username });

                if (getUserInfo) {
                    const checkPassword: boolean = checkingPassword(
                        data.password as string,
                        getUserInfo.password as string,
                    );

                    if (checkPassword) {
                        delete getUserInfo.token;
                        delete getUserInfo.password;
                        const token: string = generateToken({ ...getUserInfo });
                        await this.authRepository.update(
                            { username: getUserInfo.username },
                            { token, revokeToken: 0, refreshToken },
                        );
                        resolve({ token, refreshToken });
                    } else {
                        reject({ flag: WRONG_AUTHENTICATION.flag, message: WRONG_AUTHENTICATION.message });
                    }
                } else {
                    reject({ flag: WRONG_AUTHENTICATION.flag, message: WRONG_AUTHENTICATION.message });
                }
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.message });
            }
        });
    }

    public logout(token: string): Promise<{} | string> {
        return new Promise(async (resolve, reject) => {
            const userToken: string = token?.split(' ')[1] as string;
            try {
                const { username } = checkJwt(userToken);
                const dataUserDB: User = await this.authRepository.findOne({
                    username: username,
                    revokeToken: 0,
                });

                if (dataUserDB) {
                    const updateUser = await this.authRepository.update(
                        { username: dataUserDB.username },
                        { revokeToken: 1 },
                    );
                    resolve(updateUser);
                } else {
                    reject({ flag: NOT_FOUND.flag, message: NOT_FOUND.message });
                }
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.message });
            }
        });
    }
    public register(data: User): Promise<User | User[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const processData = {
                    ...data,
                    password: encryptPassword(data.password as string),
                };
                const result = await this.authRepository.create(processData);
                resolve(result);
            } catch (error) {
                reject({ flag: FAILED.flag, message: error.message });
            }
        });
    }
}
