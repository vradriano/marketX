import { makeStyles } from '@material-ui/core/styles'


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
  inputLabel: {
    fontWeight: 400,
    color: theme.palette.primary.main
  },
}))

export default useStyles