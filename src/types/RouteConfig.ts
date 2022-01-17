import { RequestHandler } from 'express'

export interface RouteConfig {
  [key: string]: {
    [key: string]: RequestHandler
  };
}
