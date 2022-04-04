import { Strategy } from 'passport-local'
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt'
import bcrypt from 'bcrypt'
import { UserRepository } from '../../domain/user/repositories/userRepository'
import { FindUserUseCase } from '../../domain/user/useCases/findUser'

const LocalStrategy = Strategy

const strategyFactory = async (strategyType: String): Promise<Strategy | JWTstrategy | null> => {
  let strategy: Strategy | JWTstrategy | null

  switch (strategyType) {
    case 'local':
      strategy = new LocalStrategy(
        {
          usernameField: 'email',
          passwordField: 'password'
        },

        async (email: string, password, done: any) => {
          try {
            const userRepository = new UserRepository()
            const useCase = new FindUserUseCase(userRepository)

            const user = await useCase.execute({ email: email })
            if (user === undefined && user === null) {
              return done(null, false, { message: 'User not found' })
            }

            const validate = await bcrypt.compare(password, user.password)

            if (!validate) {
              return done(null, false, { message: 'Wrong Password' })
            }

            return done(null, user, { message: 'Logged in Successfully' })
          } catch (error) {
            return done(error)
          }
        }
      )

      break

    case 'jwt':

      strategy = new JWTstrategy(
        {
          secretOrKey: process.env['JWT_SECRET'],
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        async (token, done) => {
          try {
            return done(null, token.user)
          } catch (error) {
            done(error)
          }
        }
      )

      break

    default:
      strategy = null
      break
  }
  return strategy
}

export default strategyFactory
