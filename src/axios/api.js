import { get, post, put, del, uploader } from './https'
export const ATTRACTION_LIST = (params) => get(`/api/json/v1/web/course/${params.id}`)

export const ARTICLE_LIST = () => get(`/api/json/v1/web/course`)