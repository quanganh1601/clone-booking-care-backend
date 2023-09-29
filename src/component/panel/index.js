import { SearchOutlined } from "@ant-design/icons";
import { Input } from 'antd';
import iconGooglePlay from "../../assets/image/icon-google-play.svg";
import iconApple from "../../assets/image/icon-apple.svg";
const { Search } = Input;

const Panel = () => {

  const options = [
    {
      id: 1,
      title: <div>Khám <br/><div>Chuyên khoa</div></div>,
      img: "../../assets/image/hospital.png"
    },
    {
      id: 2,
      title: <div>Khám <br/><div>Từ xa</div></div>,
      img: "../../assets/image/call_phone.png"
    },
    {
      id: 3,
      title: <div>Khám <br/><div>Tổng quát</div></div>,
      img: "../../assets/image/over.png"
    },
    {
      id: 4,
      title: <div>Xét nghiệm <br/> <div>Y học</div></div>,
      img: "../../assets/image/test.png"
    },
    {
      id: 5,
      title: <div>Sức khỏe <br/>Tinh thần</div>,
      img: "../../assets/image/spirit.png"
    },
    {
      id: 6,
      title: <div>Khám <br/>Nha khoa</div>,
      img: "../../assets/image/dentistry.png"
    },
    {
      id: 7,
      title: <div>Gói <br/>Phẩu thuật</div>,
      img: "../../assets/image/dentistry.png"
    },
    {
      id: 8,
      title: <div>Bài test <br/>Sức khỏe</div>,
      img: "../../assets/image/backgroud-header.jpeg"
    }
  ];

  return (
    <div className="content-panel">
      <div className="search-hospital">
        <div className="wrapper">
          <h1>Nền tảng y tế <br/>
          <b>Chăm sóc sức khỏe toàn diện</b>
          </h1>
          <div className="search-form">
            <Search
              placeholder="Tìm bác sỹ"
              prefix={<SearchOutlined />}
              />
          </div>
          <div className="down-app">
            <img className="icon-down-app" src={iconGooglePlay}/>
            <img className="icon-down-app" src={iconApple}/>
          </div>
        </div>
      </div>
      <div className="customize-option">
        <div className="box-option">
          <div className="option-img" />
          <div>Khám <br/><div>Chuyên khoa</div></div>
        </div>
        <div className="box-option">
          <div className="option-img" />
          <div>Khám <br/><div>Từ xa</div></div>
        </div>
        <div className="box-option">
          <div className="option-img" />
          <div>Khám <br/><div>Tổng quát</div></div>
        </div>
        <div className="box-option">
          <div className="option-img" />
          <div>Xét nghiệm <br/> <div>Y học</div></div>
        </div>
        <div className="box-option">
          <div className="option-img" />
          <div>Sức khỏe <br/>Tinh thần</div>
        </div>
        <div className="box-option">
          <div className="option-img" />
          <div>Khám <br/>Nha khoa</div>
        </div>
        <div className="box-option">
          <div className="option-img" />
          <div>Gói <br/>Phẩu thuật</div>
        </div>
      </div>
    </div>
  )
}

export default Panel;