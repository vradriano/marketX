import Link from 'next/link'
import slugify from 'slugify'
import { useState } from 'react'
import { useRouter } from 'next/router'


import {
  Container,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Grid
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import TemplateDefault from '../src/templates/Default.js'
import Card from '../src/components/Card'
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'


const useStyles = makeStyles((theme) => ({
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginBottom: 20
  },
  cardGrid: {
    marginTop: 60
  },
}))

const Home = ({ products }) => {
  const router = useRouter()
  const classes = useStyles()
  const [search, setSearch] = useState()

  const handleSubmitSearch = () => {
    router.push({
      pathname: `/search/${search}`
    })
  }

  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          O que deseja encontrar?
        </Typography>
        <Paper className={classes.searchBox}>
          <InputBase
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ex.: IPhone 12 com garantia"
          fullWidth
          />
          <IconButton onClick={handleSubmitSearch}>
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
          {
            products.map(product => {
              const category = slugify(product.category).toLocaleLowerCase()
              const title = slugify(product.title).toLocaleLowerCase()

              return (
                <Grid key={product._id} item xs={12} sm={6} md={4}>
                  <Link href={`/${category}/${title}/${product._id}`} passHref>
                    <a>
                      <Card
                        className={classes.imageSize}
                        image={`/uploads/${product.files[0].name}`}
                        title={product.title}
                        subtitle={new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(product.price)}
                      />
                    </a>
                  </Link>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps(){

  await dbConnect()
  
  const products = await ProductsModel.aggregate([{
    $sample: { size: 6 }
  }])

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}



export default Home