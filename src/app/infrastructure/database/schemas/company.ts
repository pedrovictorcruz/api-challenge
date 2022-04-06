
import mongoose from 'mongoose'
import { Company } from '../../../domain/company/entities/company'

export type CompanyModel = Company & Document

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
}, {
  toJSON: {
    transform: function (_doc, ret) {
      ret.id = ret._id
      delete ret.__v
      delete ret._id
    }
  }
})

export const CompanyModel = mongoose.model<CompanyModel>('Company', companySchema)
