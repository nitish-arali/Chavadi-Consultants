import mongoose, { Schema, Document } from 'mongoose';

export interface IClient extends Document {
  name: string;
  address: string;
  imageUrl: string;
  mapUrl?: string; // Google Maps link
  createdAt: Date;
  updatedAt: Date;
}

const ClientSchema = new Schema<IClient>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  imageUrl: { type: String, required: true },
  mapUrl: { type: String },
}, { timestamps: true });

export default mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema);
