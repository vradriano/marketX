import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6, 0, 6)
  }
}))

const Default = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Header />
        <Box className={classes.container}>
          {children}
        </Box>
      <Footer />
    </>
  )
}


export default Default