
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { User } from '../../../app/domain/user/entities/user'

export type UserModel = User & Document

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }
}, {
  toJSON: {
    transform: function (_doc, ret) {
      ret.id = ret._id
      delete ret.__v
      delete ret._id
    }
  }
})

userSchema.pre(
  'save',
  async function (next) {
    const hash = await bcrypt.hash(this.password, 10)

    this.password = hash
    next()
  }
)

export const UserModel = mongoose.model<UserModel>('User', userSchema)
