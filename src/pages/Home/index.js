import "./index.scss";
import SlideImage from "../../component/slide-image";
import Panel from "../../component/panel";
import Specialization from "../../component/specialization"

const Home = () => {

  return (
    <div className="content-home">
      <Panel/>
      <SlideImage/>
      <Specialization/>
    </div>
  )
}
export default Home;