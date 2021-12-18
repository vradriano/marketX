import { useContext, createContext, useState } from 'react'
import Toasty from '../components/Toasty'

const ToastyContext = createContext({})

export const ToastyProvider = ({ children }) => {
  const [toasty, setToasty] = useState({
    open: false,
    text: '',
<<<<<<< HEAD
    severity: 'info', 
=======
    severity: 'info',
>>>>>>> 7886bfda622e5b3966ba201091c97c36110458f3
  })

  return (
    <ToastyContext.Provider value={{ setToasty }}>
      <Toasty 
        open={toasty.open}
        severity={toasty.severity}
        text={toasty.text}
        onClose={() => setToasty({
          ...toasty,
          open: false,
        })}
      />
      {children}
    </ToastyContext.Provider>
  )
}

const useToasty = () => useContext(ToastyContext)

export default useToasty