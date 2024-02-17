import request from '@/utils/request.js'

export const userRegisterService = (registerData) => {
    const params = new URLSearchParams();
    for (let key in registerData) {
        params.append(key, registerData[key])
    }
    return request.post('/user/register', params);
}

export const userLoginService = (loginData) => {
    // console.log(loginData)
    const params = new URLSearchParams();
    for (let key in loginData) {
        params.append(key, loginData[key])
        // console.log(loginData[key])
    }
    return request.post('/user/login', params);
}