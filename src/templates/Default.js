import Header from '../components/Header.js'

const Default = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <footer>FOOTER</footer>
    </>
  )
}


export default Default