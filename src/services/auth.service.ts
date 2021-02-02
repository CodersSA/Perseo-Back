import { SIGNIN_CREDENTIALS_ERROR } from '../constants/errors';
import { compareHash } from '../helpers/bcrypt';
import { createToken } from '../helpers/jwt';
import { ILogin } from './../interfaces/ILogin';
import { db_userInfo } from './../repositories/user.repository';

export const serv_login = async (body: ILogin) => {
    try {
        const { email, password } = body

        const userData = await db_userInfo(email, { _id: 1, email: 1, password: 1 })
        if (!userData)
            throw new Error(SIGNIN_CREDENTIALS_ERROR);

        const isValidPassword = await compareHash(password, userData.password)
        if (!isValidPassword)
            throw new Error(SIGNIN_CREDENTIALS_ERROR);

        const userToken = createToken(userData)

        return { status: 200, msg: userToken }
    } catch (e) {
        return { status: 400, msg: e.message }
    }
}