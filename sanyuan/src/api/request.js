import { axiosInstance } from './config'

export const getRecommendListRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve({
                data: [{
                    id: 1,
                    title: 'aaaaaaa'
                }]
            })
        },1000)
    })
}

export const getBannersRequest = () =>{
    return axiosInstance.get('/banner');
}