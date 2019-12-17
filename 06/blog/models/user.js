import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

let Schema = mongoose.Schema

let userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    default: Date.now // 不要写 Date.now()
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('User', userSchema)
