import * as yup from 'yup'

const initialValues = {
  title: '',
  category: '',
  description: '',
  price: '',
  email: '',
  name: '',
  phone: '',
  files: [],
}

const validationSchema  = yup.object().shape({
  title: yup.string()
    .min(6, 'O título precisa ter no mínimo 6 caracteres.')
    .max(100, 'Título muito grande!')
    .required('Campo obrigatório'),

  category: yup.string()
    .required('Campo Obrigatório'),

  description: yup.string()
    .min(50, 'Escreva uma descrição com pelo menos 50 caracteres')
    .required('Campo obrigatório'),
  price: yup.number().required('campo obrigatório'),
  email: yup.string().email('Digite um email válido!').required('Campo obrigatório!'),
  name: yup.string().required('Campo Obrigatório'),
  phone: yup.number().required('Campo obrigatório'),
  files: yup.array().min(1, 'Envie pelo menos uma imagem!').required('Campo Obrigatório!')
})

export {
  initialValues,
  validationSchema
}