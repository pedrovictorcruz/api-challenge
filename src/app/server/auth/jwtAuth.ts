import { Request, Response } from 'express'
import passport from 'passport'
import { AuthInterface } from './interfaces/authInterface'

const execJwtAuthenticator = (strategy: string) => (req: Request, res: Response, next: any) => {
  return passport.authenticate(strategy, { session: false })(req, res, next)
}

export const jwtAuthenticator = (strategyName: string): AuthInterface => ({
  authenticate: execJwtAuthenticator(strategyName)
})
