import {
    Grid,
    Container,
    Box,
    InputBase,
    Paper,
    IconButton,
    Typography 
  } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/search'

import slugify from 'slugify'
import Link from 'next/link'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import { formatCurrency } from '../../src/utils/currency'
import ProductsModel from '../../src/models/products'


const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginBottom: 25
  }
}))

const List = ({ products }) => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="lg">

        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Paper  className={classes.searchBox}>
              <InputBase
              placeholder="Ex.: Harley Davidson FatBoy   2015"
              fullWidth
              />
            <IconButton>
             <SearchIcon />
            </IconButton>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Box className={classes.box}>
            <Typography component="h6" variant="h6">
              Anúncios
            </Typography>
            <Typography component="span" variant="subtitle2">
              ENCONTRADOS {products.length} ANÚNCIOS
            </Typography>
            <br/><br/>
            <Grid container spacing={5}>
              {
              products.map(product => {
                const category = slugify(product.category).toLocaleLowerCase()
                const title = slugify(product.title).toLocaleLowerCase()

                return (
                  <Grid key={product._id} item xs={12} sm={6} md={4}>
                    <Link href={`/${category}/${title}/${product._id}`} passHref>
                      <a>
                        <Card
                          image={`/uploads/${product.files[0].name}`}
                          title={product.title}
                          subtitle={formatCurrency(product.price)}
                        />
                      </a>
                    </Link>
                  </Grid>
                )
              })
            }
            </Grid>
          </Box>  

        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps({ query }) {
  const { q } = query

  const products = await ProductsModel.find({
    $or: [
      {
        title: {
          $regex: q,
          $options: 'i'
        }
      },
      {
        description: {
          $regex: q,
          $options: 'i'
        }
      }
    ]
  })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}

export default List