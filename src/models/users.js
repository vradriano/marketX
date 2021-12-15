import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O Campo "nome" é obrigatório!']
  },
  email: {
    type: String,
    required: [true, 'O Campo "e-mail" é obrigatório!']
  },
  password: {
    type: String,
    required: [true, 'O Campo "senha" é obrigatório!']
  },
})

export default mongoose.model.users || mongoose.model('users', schema)