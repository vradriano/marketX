import {
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TemplateDefault from '../../src/templates/Default.js'


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6)
  },
  buttonadd: {
    margin: '30px auto',
    display: 'block'
  },
  cardmedia: {
    paddingTop: '56%'
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
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardmedia}
                image={'https://source.unsplash.com/random'}
                title="Título da Imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  60 Reais
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardmedia}
                image={'https://source.unsplash.com/random'}
                title="Título da Imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  60 Reais
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardmedia}
                image={'https://source.unsplash.com/random'}
                title="Título da Imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  60 Reais
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                className={classes.cardmedia}
                image={'https://source.unsplash.com/random'}
                title="Título da Imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  60 Reais
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
