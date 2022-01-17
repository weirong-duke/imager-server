import prisma from '../../database'
import { NextFunction, Request, Response } from 'express'
import { Image } from '../../types/index'

const createImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const results = await Promise.all(req.body.map(async ({ data, name, size }: Image) => {
      const imageToCreate = {
        data: {
          data,
          name,
          size
        }
      }
      return await prisma.image.create(imageToCreate)
    }))
    res.status(200).send({ data: results })
  } catch (e) {
    res.status(400).send(`Encountered an error while uploading images: ${e}`)
    return res
  }
}

export { createImages }
