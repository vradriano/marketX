import { Button, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../src/templates/Default.js'


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6)
  },
  buttonadd: {
    margin: '30px auto',
    display: 'block'
  }
}))


export default function Home() {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align="center">
          Meus Anuncios
        </Typography>
        <Button variant="contained" color="primary" className={classes.buttonadd} >
          Publicar novo anúncio
        </Button>
      </Container>
    </TemplateDefault>
  )
}
