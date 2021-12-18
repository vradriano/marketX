import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'

import {
  Box,
  Container,
  Typography,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Button,
  CircularProgress
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'
<<<<<<< HEAD
import { initialValues, validationSchema } from './formValues'
=======
import { initialValues, validationSchema } from './formValues.js'
>>>>>>> 7886bfda622e5b3966ba201091c97c36110458f3
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'

const Signup = () => {
  const classes = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()

  const handleFormSubmit = async values => {
    const response = await axios.post('/api/users', values) 
    
    if (response.data.success){
      setToasty({
        open: true,
        severity: 'success',
        text: 'Cadastro realizado com sucesso!'
      })

      router.push('/auth/signin')
    }
  }

  return (
    <TemplateDefault> 
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Crie sua conta
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="textPrimary">
          E anuncie para todo o Brasil
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box className={classes.box}>
          <Formik
            initialValues={initialValues}     
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}    
          >
            {
              ({
                errors,
                touched,
                values,
                isSubmitting,
                handleChange,
                handleSubmit
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth error={errors.name && touched.name} className={classes.formControl}>
                      <InputLabel>Nome</InputLabel>
                      <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.email && touched.email} className={classes.formControl}>
                      <InputLabel>E-mail</InputLabel>
                      <Input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.password && touched.password} className={classes.formControl}>
                      <InputLabel>Senha</InputLabel>
                      <Input 
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.password && touched.password ? errors.password : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.passwordConf && touched.passwordConf} className={classes.formControl}>
                      <InputLabel>Confirmação de senha</InputLabel>
                      <Input 
                        name="passwordConf"
                        type="password"
                        value={values.passwordConf}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                      </FormHelperText>
                    </FormControl>
                    {
                      isSubmitting 
<<<<<<< HEAD
                      ? (
                        <CircularProgress className={classes.loading} />
                      ) : (
=======
                      ? <CircularProgress className={classes.loading} />
                      : (
>>>>>>> 7886bfda622e5b3966ba201091c97c36110458f3
                        <Button 
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Cadastrar
                        </Button>
                      )
                    }
                    
                  </form>
                )
              }
            }
          </Formik>
        </Box>
      </Container>
    </TemplateDefault>
  )

}

export default Signup