
import mongoose from 'mongoose'
import { Asset } from '../../../domain/asset/entities/asset'

export type AssetModel = Asset & Document

const assetSchema = new mongoose.Schema({
  image: {type: String, required: true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  model: { type: String, required: true },
  owner: { type: String, required: true },
  status: { type: String, required: true },
  health: { type: Number, required: true },
  unitId: { type: String, required: true}
}, {
  toJSON: {
    transform: function (_doc, ret) {
      ret.id = ret._id
      delete ret.__v
      delete ret._id
    }
  }
})

export const AssetModel = mongoose.model<AssetModel>('Asset', assetSchema)
