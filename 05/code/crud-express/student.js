import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/itcast')

let Schema = mongoose.Schema

let studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
})

export default mongoose.model('Student', studentSchema)

