import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'

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
import { initialValues, validationSchema } from './formValues'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'
import { Alert } from '@material-ui/lab'

const Signin = () => {
  const classes = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()


  
  const handleFormSubmit = values => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: 'http://localhost:3000/user/dashboard'
    })
  }

  return (
    <TemplateDefault> 
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Entre na sua conta
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
                    {
                      router.query.i === '1'
                      ? (
                        <Alert severity="error" className={classes.errorMessage}>
                          Usuário não encontrado!
                        </Alert>
                      ) :   
                        null
                    }               
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

                    {
                      isSubmitting 
                      ? (
                        <CircularProgress className={classes.loading} />
                      ) : (
                        <Button 
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Entrar
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

export default Signin