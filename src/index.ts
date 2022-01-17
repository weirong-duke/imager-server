import cors from 'cors'
import express, {
  Application,
  Request,
  Response,
  NextFunction
} from 'express'
import routes from './routes'

// Boot express
const app: Application = express()
const port = 5000

app.use(cors())
app.use(express.json({ limit: '20mb' }))
app.use(express.urlencoded({ limit: '20mb' }))

// Application routing
Object.entries(routes).forEach(([routeName, routeFunctions]) => {
  Object.keys(routeFunctions).forEach((method: keyof Application) => app[method](routeName, routeFunctions[method]))
})

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ data: 'Page not found' })
})

// Start server
app.listen(port, async () => {
  console.log(`Server is listening on port ${port}!`)
})
