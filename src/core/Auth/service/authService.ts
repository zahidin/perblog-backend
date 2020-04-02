import AuthRepository from '../repository/authRepository';
import { User } from '@/types/user';
import { generateToken, generateRefreshToken } from '@/utils/jwt';
import { checkingPassword, encryptPassword } from '@/utils/bcrypt';

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

                const checkPassword: boolean = checkingPassword(
                    data.password as string,
                    getUserInfo.password as string,
                );

                if (getUserInfo && checkPassword) {
                    delete getUserInfo.token;
                    delete getUserInfo.password;
                    const token: string = generateToken({ getUserInfo });
                    await this.authRepository.update(
                        { username: getUserInfo.username },
                        { token, revokeToken: 0, refreshToken },
                    );
                    resolve({ token, refreshToken });
                } else {
                    reject({ flag: 300, message: 'username or password is wrong ' });
                }
            } catch (error) {
                reject(error);
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
                reject(error);
            }
        });
    }
}
