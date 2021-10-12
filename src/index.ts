import express, { Request, Response, NextFunction } from 'express'

const app = express()
const port = 3000

app.use('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'Fodaa' })
})

app.listen(3000, () => {
  console.log(` Start serve on ${port}`)
})
