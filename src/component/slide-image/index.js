import "./index.scss";
import { Carousel } from "antd";
import headerBanana from "../../assets/image/header-banana.jpeg";
import imageBooking from "../../assets/image/img-booking-care.png";
import sell250 from "../../assets/image/sell-250.png";
import imgBooking from "../../assets/image/booking.jpeg";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons"

const SlideImage = () => {

  const data = [
    { 
      id: 1,
      img: headerBanana,
      label: "Hợp tác",
      title: "Đặt khám với BookingCare trên PharmaCity",
      discription: [
        "Thực hiện bởi bác sỹ nam học",
        "Thực hiện tại cơ sở y tế",
        "Chi phí minh bạch"
      ]
    },
    {
      id: 4, 
      img: imgBooking, 
      label: "Mới ra mắt",
      title: "Tư vấn phẩu thuật bao quy đầu trọn gói",
      discription: [
        "Thực hiện bởi bác sỹ nam học",
        "Thực hiện tại cơ sở y tế",
        "Chi phí minh bạch"
      ]
    },
    {
      id: 2,
      img: imageBooking,
      label: "Khuyến mại",
      title: "BookingCare: Ưu đãi đặt khám online giảm giá 250k",
      discription: [
        "Thực hiện bởi bác sỹ nam học",
        "Thực hiện tại cơ sở y tế",
        "Chi phí minh bạch"
      ]
    },
    {
      id: 3,
      img: sell250,
      label: "Phẩu thuật",
      title: "Giải pháp chuyển đổi số toàn diện cho bệnh viện",
      discription: [
        "Thực hiện bởi bác sỹ nam học",
        "Thực hiện tại cơ sở y tế",
        "Chi phí minh bạch"
      ]
    },
    {
      id: 5,
      img: imgBooking,
      label: "Mới ra mắt",
      title: "Đặt khám với BookingCare trên PharmaCity",
      discription: [
        "Thực hiện bởi bác sỹ nam học",
        "Thực hiện tại cơ sở y tế",
        "Chi phí minh bạch"
      ]
    }
  ]

  return (
    <Carousel autoplay slidesToShow={4} className="content-slide">
      {data.map((e) => (
        <div className="box-item">
          <img src={e.img}/>
          <div className="show-label">{e.label}</div>
          <div className="show-title">{e.title}</div>
          <div className="sumary-info">
            {e.discription.map((info) => (
              <span>{`- ${info}`}</span>
            ))}
          </div>
          <Link className="link-to-detail">
            {"Xem chi tiết"}
            <RightOutlined/>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default SlideImage;