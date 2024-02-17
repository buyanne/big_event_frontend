import request from '@/utils/request.js'
import {useTokenStore} from '@/stores/token.js'

export const articleCategoryListService =
    () => {
        const tokenStore = useTokenStore();

        return request.get('/category');
    }

export const articleCategoryAddService =
    (categoryData) => {
        request.post('/category', categoryData)
    }

export const articleCategoryUpdateService =
    (categoryData) => {
        request.put('/category', categoryData)
    }
export const articleCategoryDeleteService =
    (id) => {
        request.delete('/category?id=' + id);
    }

export const articleListService =
    (params) => {
        return request.get('/article', {params: params})
    }