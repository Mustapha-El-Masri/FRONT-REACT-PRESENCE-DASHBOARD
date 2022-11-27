import http from './AxiosContext'


const create = (data)=>{
    return http.post("/auth/login" , data)
}


export default { create }