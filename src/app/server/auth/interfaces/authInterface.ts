import { Request, Response } from 'express'

export interface AuthInterface {
  authenticate: (req: Request, res: Response, next: any) => Promise<any>
}
