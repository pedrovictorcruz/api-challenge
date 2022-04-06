import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import { UserRepository } from "../repositories/userRepository"
import bcrypt from 'bcrypt'

export class LoginController {
  async login (request: Request, response: Response): Promise<Response> {
      const { email, password } = request.body

      const userRepository = new UserRepository()
      
      const user = await userRepository.findByEmail(email)

      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign({ user: {id: user.id} }, process.env['JWT_SECRET'] as string)
          
          return response.json({ token })
        }
      }
      return response.status(401).send({message: "Dados inválidos"})
  }
}
