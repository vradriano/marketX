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
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 20
  },
  cardGrid: {
    marginTop: 50
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="md">
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
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                  Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                  Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />
          </Grid> 
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
              actions={
                <>
                  <Button size="small" color="primary">
                  Editar
                  </Button>
                  <Button size="small" color="primary">
                    Remover
                  </Button>
                </>
              }
            />
          </Grid> 
          <Grid item xs={12} sm={6} md={4}>
            <Card
                image={'https://source.unsplash.com/random'}
                title="Produto X"
                subtitle="R$ 60,00"
                actions={
                  <>
                    <Button size="small" color="primary">
                    Editar
                    </Button>
                    <Button size="small" color="primary">
                      Remover
                    </Button>
                  </>
                }
              />
          </Grid>   
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home