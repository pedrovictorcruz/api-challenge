
import mongoose from 'mongoose'
import { Unit } from '../../../domain/unit/entities/unit'

export type UnitModel = Unit & Document

const unitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyId: { type: String, required: true}
}, {
  toJSON: {
    transform: function (_doc, ret) {
      ret.id = ret._id
      delete ret.__v
      delete ret._id
    }
  }
})

export const UnitModel = mongoose.model<UnitModel>('Unit', unitSchema)
