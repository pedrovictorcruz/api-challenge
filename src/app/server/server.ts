import express, { Express, json } from 'express'
import { Server } from 'http'
import cors from 'cors'
import passport from 'passport'
import { UserRoutes } from '../domain/user/routes'

const preRoutesMiddlewares = async (app: Express): Promise<void> => {
  app.use(cors())
  app.use(json())
  app.use(express.urlencoded({ extended: true }))

  app.use(passport.initialize())
}

export const webServer = async (appPort: number): Promise<Server> => {
  const app = express()

  await preRoutesMiddlewares(app)
  app.use(UserRoutes)

  const server = app.listen(appPort, () => {
    console.log(`WebServer running on port ${appPort}`)
  })

  return server
}
