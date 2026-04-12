import mongoose, { Schema, Document } from 'mongoose';

export interface ICircular extends Document {
  title: string;
  url: string; // link to PDF
  department: string; // e.g. RERA, GBA, BMRDA
  subDepartment?: string;
  isNewBadge: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CircularSchema = new Schema<ICircular>({
  title: { type: String, required: true },
  url: { type: String, required: true },
  department: { type: String, required: true },
  subDepartment: { type: String },
  isNewBadge: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Circular || mongoose.model<ICircular>('Circular', CircularSchema);
