import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { UserRepository } from "../domain/user/repositories/userRepository";
import { TokenInterface } from "./interfaces/tokenInterface";

export default class AuthMiddleware {
  async handle(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.header('Authorization');

    if (!authorizationHeader) {
      return res.status(401).json({message: 'Missing Authorization Header'})
    }

    const token = authorizationHeader.split(' ')[1]

    return jwt.verify(
			token,
			process.env['JWT_SECRET'] as string,
			async function (err, decoded) {
				if (err) {
					return res.status(401).json({
						message:
							'Token inválido'
					})
				}

        const userRepository = new UserRepository()
				const user = await userRepository.findById((decoded as TokenInterface).user.id)

				if (!user) {
					return res.status(401).json({
						message:
							'Token inválido',
					})
				}
        
        req.user = user

				return next()
			}
		)
  }
}