import Header from "../../component/header";
import Footer from "../../component/footer";

const DefaultLayout = ({children}) => {
  return (
    <div className="container">
      <Header/>
      <div className="body">
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default DefaultLayout;