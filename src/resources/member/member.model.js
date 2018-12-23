import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema(
  {
    birthday: String,
    blood_type: String,
    english_first_name: String,
    english_last_name: String,
    facebook: String,
    height: Number,
    hobby: String,
    instagram: String,
    like: Array,
    nickname: String,
    province: String,
    thai_first_name: String,
    thai_last_name: String,
    profile_image: String,
    generation: String,
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'member',
      required: true
    }
  },
  { timestamps: true }
)

export const Member = mongoose.model('member', memberSchema, 'member')
