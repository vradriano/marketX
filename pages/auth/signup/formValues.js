import * as yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConf: '',
}

const validationSchema = yup.object().shape({
  name: yup.string()
  .required('Campo obrigatório!'),
  email: yup.string()
  .email('Digite um E-mail válido!')
  .required('Campo obrigatório!'),
  password: yup.string()
  .min(6, 'Mínimo de 6 caracteres')
  .required('Campo obrigatório!'),
  passwordConf: yup.string()
  .required('Campo Obrigatório')
  .oneOf([yup.ref('password'), null, 'As senhas precisam iguais!'])
})

export {
  initialValues, 
  validationSchema,
}