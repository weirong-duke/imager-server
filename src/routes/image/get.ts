import prisma from '../../database'
import { NextFunction, Request, Response } from 'express'

const getImage = async () => {

}

const getImages = async (req: Request, res: Response, next: NextFunction) => {
  const images = await prisma.image.findMany()
  res.status(200).send({ data: images })
}

export {
  getImage,
  getImages
}
