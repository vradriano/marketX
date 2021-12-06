import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import {
  IconButton,
  Box,
  Container,
  TextField,
  Typography,
  Select,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  MenuItem,
  FormHelperText
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImagem: {},

  boxContainer: {
    paddingBottom: theme.spacing(3)
  },
  box: {
    background: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  thumbsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    margin: '0 15px 15px 0',
    width: 200,
    height: 150,
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black'
  },
  thumb: {
    position: 'relative',
    width: 200,
    height: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    margin: '0px 15px 15px 0px',

    '& $mainImagem': {
      backgroundColor: 'blue',
      padding: '6px 10px',
      position: 'absolute',
      bottom: '0',
      left: '0',
    },

    '&:hover $mask': {
      display: 'flex',
    },

    '& $mask': {
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      width: '100%',
      height: '100%',
    }
  }
}))

const validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'O título precisa ter no mínimo 6 caracteres.')
    .max(100, 'Título muito grande!')
    .required('Campo obrigatório'),

  category: yup.string()
    .required('Campo Obrigatório')
})


const Publish = () => {
  const classes = useStyles()
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFiles([
        ...files,
        ...newFiles
      ])
    }
  })

  const handleRemoveFile = fileName => {
    const newStateFiles = files.filter(file => file.name !== fileName)

    setFiles(newStateFiles)
  }

  return (
    <TemplateDefault>
      <Formik
      initialValues={{
        title: '',
        category: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('ok, enviou o form', values)
      }}
      >
        {
          ({
            values,
            errors,
            handleChange,
            handleSubmit
          }) => {
            console.log(errors)
            return (
              <form onSubmit={handleSubmit}>
                <Container maxWidth="sm">
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" >
                    Publicar Anúncio
                  </Typography>
                  <Typography component="h5" variant="h5" align="center" color="textPrimary" >
                    Quanto mais detalhado melhor!
                  </Typography>
                </Container>

                <br/><br/>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                  <Typography component="h6" variant="h6" color="textPrimary" >
                    Título do Anúncio
                  </Typography>
                  <TextField
                    name="title"
                    value={values.title}
                    onChange={handleChange} 
                    label="Ex: Bicicleta Aro 18 com garantia."
                    size="small"
                    fullWidth
                    error={errors.title}
                    helperText={errors.title}
                  />
                  <br /><br />
                  <Typography component="h6" variant="h6" color="textPrimary">
                    Categoria
                  </Typography>
                  <FormControl error={errors.category} fullWidth>
                    <Select
                      name="category"
                      value={values.category}
                      fullWidth
                      onChange={handleChange}
                    >
                      <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                      <MenuItem value="Agricultura">Agricultura</MenuItem>
                      <MenuItem value="Moda">Moda</MenuItem>
                      <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                      <MenuItem value="Serviços">Serviços</MenuItem>
                      <MenuItem value="Lazer">Lazer</MenuItem>
                      <MenuItem value="Animais">Animais</MenuItem>
                      <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
                      <MenuItem value="Imóveis">Imóveis</MenuItem>
                      <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                      <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                      <MenuItem value="Esporte">Esporte</MenuItem>
                      <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                      <MenuItem value="Emprego">Emprego</MenuItem>
                      <MenuItem value="Outros">Outros</MenuItem>
                    </Select>
                    <FormHelperText>
                      {
                        errors.category
                      }
                    </FormHelperText>
                  </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                      Imagens
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                      A primeira imagem é a foto principal do seu anúncio.
                    </Typography>
                    <Box className={classes.thumbsContainer}>
                      <Box className={classes.dropzone} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Typography variant="body2" color="textPrimary">
                          Clique para adicionar ou arraste a imagem para aqui
                        </Typography>
                      </Box>

                      {
                        files.map((file, index) => (
                          <Box
                          key={file.name}
                          className={classes.thumb} 
                          style={{ backgroundImage: `url(${file.preview})` }}
                          >
                            {
                              index === 0 ?
                              <Box className={classes.mainImagem}>
                                <Typography variant="body" color="secondary">
                                  Principal
                                </Typography>
                              </Box>
                              : null
                            }
                            <Box className={classes.mask}>
                              <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                <DeleteForever  fontSize="large"/>
                              </IconButton>
                            </Box>
                          </Box>
                        ))
                      }
                      
                    </Box>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                      Descrição
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                      Escreva os detalhes do que você está vendendo
                    </Typography>
                    <TextField 
                      multiline
                      rows={6}
                      variant="outlined"
                      fullWidth 
                    />
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                      Preço
                    </Typography>
                    <br />
                    <FormControl fullWidth variant="outlined"> 
                      <InputLabel>Valor</InputLabel>
                      <OutlinedInput 
                        onChange={() => {}}
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        labelWidth={40}
                      />
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                      Dados de Contato
                    </Typography>
                    <TextField 
                      label="Nome"            
                      variant="outlined"
                      size="small"
                      fullWidth 
                    />
                      <br />< br/> 
                    <TextField 
                      label="E-mail"            
                      variant="outlined"
                      size="small"
                      fullWidth 
                    />
                      <br />< br/>  
                    <TextField 
                      label="Telefone"            
                      variant="outlined"
                      size="small"
                      fullWidth 
                    />
                      <br />< br/>  
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box textAlign="right">
                    <Button type="submit" variant="contained" color="primary">Publicar Anúncio</Button>
                  </Box>
                </Container>
              </form>                    
            )
          }
        }
      </Formik>
    </TemplateDefault>
  )
}

export default Publish