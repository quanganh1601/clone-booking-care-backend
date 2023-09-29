import "./index.scss";
import Nerve from "../../assets/image/than-kinh.jpeg";
import Ear from "../../assets/image/ear-nose.jpeg";
import Spine from "../../assets/image/co-xuong-khop.jpeg";
import Heart from "../../assets/image/tim-mach.jpeg";
import Medicine from "../../assets/image/co-xuong-khop.jpeg";

const Specialization = () => {
  const data = [
    {
      id: 1,
      title: "Tai mũi họng",
      image: Ear
    },
    {
      id: 2,
      title: "Cột sống",
      image: Spine
    },
    {
      id: 3,
      title: "Y học cổ chuyền",
      image: Medicine
    },
    {
      id: 4,
      title: "Châm cứu",
      image: Heart
    },
    {
      id: 5,
      title: "Sản phụ khoa",
      image: Spine
    },
    {
      id: 6,
      title: "Siêu âm thai",
      image: Nerve
    }
  ];
  console.log("dfdsf")

  return (
    <div className="content-specialization">
      <div className="title-spec">{"Chuyên khoa phổ biến"}</div>
      <div className="image">
        {data.map((item) => (
          <a className="box-item">
            <img src={item.image}/>
            <div>{item.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Specialization;