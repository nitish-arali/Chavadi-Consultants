import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  status: 'New' | 'Contacted' | 'Closed';
  handledBy?: mongoose.Types.ObjectId; // User ID
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>({
  fullName: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['New', 'Contacted', 'Closed'], default: 'New' },
  handledBy: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
