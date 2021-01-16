import { NavLink, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { useEffect, useState } from "react";
import axios from "axios";
import { Menu } from "antd";
axios.defaults.baseURL = "/api";
// 左侧菜单栏
const SubMenu = Menu.SubMenu;
const ulList = [
  {
    name: "active1",
    path: "/active/active1",
  },
  {
    name: "active2",
    path: "/active/active2",
  },
  {
    name: "active3",
    path: "/active/active3",
  },
];

function Active(props) {
  const routes = props.route.routes;
  let [countInit, setCountInit] = useState(0);
  const toPage = (it) => {
    props.history.push(it.path);
    setCountInit(() => {
      return countInit + 1;
    });
  };
  useEffect(() => {
    axios.get("/").then((res) => {
      console.log("res", res);
    });
  });
  return (
    <div>
      <ul>
        {ulList.map((it) => {
          return (
            <li key={it.path} onClick={() => toPage(it)}>
              {it.name}
            </li>
          );
        })}
      </ul>
      <p>{countInit}</p>
      {/* <NavLink to="/active/active1" activeClassName="selected"><span > active1 </span></NavLink>
            <NavLink to="/active/active2" activeClassName="selected"><span > active2 </span></NavLink>
            <NavLink to="/active/active3" activeClassName="selected"><span > active3 </span></NavLink> */}
      <div>{renderRoutes(routes)}</div>
      <main className="main">
        <div className="menu">
          <Menu mode="inline" theme="dark" style={{ width: "240" }}>
            <SubMenu
              key="user"
              title={
                <span>
                  {/* <Icon type="user" /> */}
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="user-list">
                <Link to="/user/list">用户列表</Link>
              </Menu.Item>
              <Menu.Item key="user-add">
                <Link to="/user/add">添加用户</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="book"
              title={
                <span>
                  {/* <Icon type="book" /> */}
                  <span>图书管理</span>
                </span>
              }
            >
              <Menu.Item key="book-list">
                <Link to="/book/list">图书列表</Link>
              </Menu.Item>
              <Menu.Item key="book-add">
                <Link to="/book/add">添加图书</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>

        <div className="content">5435435</div>
      </main>
    </div>
  );
}

export default Active;
