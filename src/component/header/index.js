import { useEffect, useState } from "react";
import { Button, Dropdown, Menu } from "antd";
import { changeLanguage } from "../../action";
import { connect } from "react-redux";
import { CaretDownOutlined } from "@ant-design/icons"
import { cloneDeep } from "lodash";
import vi from "../../assets/image/vi.svg"
import en from "../../assets/image/en.svg"
import "./index.scss";

const Header = (props) => {
  const { changeLanguage } = props;

  const menus = [
    { label: "Chuyên khoa", discription: "Tìm theo bác sỹ chuyên khoa" },
    { label: "Cơ sở y tế", discription: "Chọn bệnh viện phòng khám" },
    { label: "Bác sỹ", discription: "Chọn bác sỹ giỏi" },
    { label: "Gói khám", discription: "Khám sức khỏe cộng đồng" }
  ];

  const languages = [
    { id: 1, key: "vi", text: "Vi", image: vi },
    { id: 2, key: "en", text: "En", image: en }
  ];
  const language = languages.find((l) => l.key == props.language);

  const showMenuSelectLanguage = () => {
    return (
      <Menu onClick={(e)=> changeLanguage(e.key)}>
        <Menu.Item key="vi">
          <a className="text-menu"><img src={vi} style={{ width: 20, height: 20 }}/>&nbsp;&nbsp; Tiếng Việt</a>
        </Menu.Item>
        <Menu.Item key="en">
          <a><img src={en} className="s-20"/>&nbsp;&nbsp; English</a>
        </Menu.Item>
      </Menu>
    )
  }

  return (
    <div className="header-container">
      <div className="wrapper-header">
        <div className="header-left">
          <div className="logo">
            <img src="https://bookingcare.vn/assets/icon/bookingcare-2020.svg"/>
          </div>
          <div className="menu">
            {menus.map((menu) => {
              return (
                <div className="menu-item">
                  <a className="label">{menu.label}</a>
                  <span className="discription">{menu.discription}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="header-right">
          <Dropdown
            trigger={["hover"]}
            overlay={showMenuSelectLanguage()}
            style={{ marginLeft: 20 }}
            className="language"
            placement="bottomCenter"
          >
            <span
              className="nav-item"
              style={{
                color: "rgba(0,0,0,.65)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
            >
              <img
                src={language.image}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 8,
                  borderRadius: '50%'
                }}
              />
              <div className="vertical"></div>
              <span
                style={{
                  overflow: "hidden",
                  marginRight: 10,
                  color: "#3E4784"
                }}>
                  {language.text}
              </span>
              <CaretDownOutlined />
            </span>
          </Dropdown>
        </div>
      </div>
    </div>
  )
};
const mapStatetoProps = (state) => ({
  language: state.reducer.language
})
export default connect(mapStatetoProps, { changeLanguage })(Header);