import { Schema, model, models } from "mongoose";

const TokenSchema = new Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default models.Token || model("Token", TokenSchema);
