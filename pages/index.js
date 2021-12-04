import {
  Container,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../src/templates/Default.js'

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    padding: theme.spacing(8, 10, 6)
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 20
  },
  cardmedia: {
    paddingTop: '56%'
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="md" className={classes.searchContainer}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          O que deseja encontrar?
        </Typography>
        <Paper className={classes.searchBox}>
          <InputBase
          placeholder="Ex.: IPhone 12 com garantia"
          fullWidth
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth="lg" className={classes.cardGrid}>
        <Typography component="h2" variant="h4" align="center" color="textPrimary">
          Destaques
        </Typography>
        <br />
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
            </Card>
          </Grid>   
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home