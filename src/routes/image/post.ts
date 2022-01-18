import prisma from '../../database'
import { NextFunction, Request, Response } from 'express'
import { Image } from '../../types/index'

const createImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('body', req.body)
    const results =
      await Promise.all(
        req.body.map(async ({
          data,
          details,
          fileName,
          name,
          size
        }: Image) => {
          const imageToCreate = {
            data: {
              data,
              details,
              fileName,
              name: name || fileName,
              size
            }
          }
          console.log('image to ctreated', imageToCreate)
          return await prisma.image.create(imageToCreate)
        }))
    res.status(200).send({ data: results })
  } catch (e) {
    res.status(400).send(`Encountered an error while uploading images: ${e}`)
    return res
  }
}

export { createImages }
