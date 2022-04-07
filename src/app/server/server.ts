import express, { Express, json } from 'express'
import { Server } from 'http'
import cors from 'cors'
import passport from 'passport'
import { UserRoutes } from '../domain/user/routes'
import { CompanyRoutes } from '../domain/company/routes'
import { UnitRoutes } from '../domain/unit/routes'
import { AssetRoutes } from '../domain/asset/routes'

const preRoutesMiddlewares = async (app: Express): Promise<void> => {
  app.use(cors())
  app.use(json())
  app.use(express.urlencoded({ extended: true }))

  app.use(passport.initialize())
}

export const webServer = async (): Promise<Server> => {
  const app = express()

  await preRoutesMiddlewares(app)
  app.use(UserRoutes)
  app.use(CompanyRoutes)
  app.use(UnitRoutes)
  app.use(AssetRoutes)

  const server = app.listen(process.env['PORT'] || 3000, () => {
    console.log(`WebServer running`)
  })

  return server
}
