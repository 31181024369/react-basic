import React from "react";

import "react-pro-sidebar/dist/css/styles.css";
import { DiReact } from "react-icons/di";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from 'react-pro-sidebar';
  import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
  import sidebarBg from '../../../src/assets/bg2.jpg';
import { Link, useNavigate } from "react-router-dom";

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  const navigate=useNavigate();
  return (
    <div>
      <ProSidebar
        image={ sidebarBg}
       
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <DiReact size={'3em'} color={"00bfff"} />
            <span onClick={()=>{navigate('/')}}> hoi dan it</span>
           
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={
                <span className="badge red">
                  New
                </span>
              }
            >
              Dashboard
              <Link to="/admin" />
            </MenuItem>
          
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              suffix={<span className="badge yellow">3</span>}
           
              icon={<FaRegLaughWink />}
              title="Features"
            >
              <MenuItem> Quản lý Users <Link to="/admin/manage-users" /></MenuItem>
              <MenuItem> Quản lý bài Quiz <Link to="/admin/manage-quiz" /></MenuItem>
              <MenuItem> Quản lý câu hỏi <Link to="/admin/manage-questions"></Link></MenuItem>
            </SubMenu>
           
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
               viewSource
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default SideBar;
