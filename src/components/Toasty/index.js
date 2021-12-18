import {
<<<<<<< HEAD
  Snackbar,
=======
  SnackBar
>>>>>>> 7886bfda622e5b3966ba201091c97c36110458f3
} from '@material-ui/core'

import MuiAlert from '@material-ui/lab/Alert'

const Toasty = ({ open, text, severity, onClose=null }) => {
  const handleClose = (event, reason) => {
    if(reason === 'clickaway'){
      return
    }

    if(onClose) onClose()
  }

  return (
<<<<<<< HEAD
    <Snackbar
=======
    <SnackBar
>>>>>>> 7886bfda622e5b3966ba201091c97c36110458f3
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlert elevation={6} variant="filled" severity={severity}>
        {text}
      </MuiAlert>
<<<<<<< HEAD
    </Snackbar>
=======
    </SnackBar>
>>>>>>> 7886bfda622e5b3966ba201091c97c36110458f3
  )
}

export default Toasty