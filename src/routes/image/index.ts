import { getImages } from './get'
import { RouteConfig } from '../../types'
import { createImages } from './post'

const imageRoutes: RouteConfig = {
  '/images': {
    get: getImages,
    post: createImages
  }
}

export default imageRoutes
