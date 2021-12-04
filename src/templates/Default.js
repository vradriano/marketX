import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

const Default = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}


export default Default