import React from "react";
import { Menu,MenuItem } from '@material-ui/core';
import "./style.css"

export default function MyMenu(props)
{
    return (
        <>
       <nav className="stroke">
            <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#">Bảng xếp hạng</a></li>
            <li><a href="#">Câu lạc bộ</a></li>
            <li><a href="#">Thống kê</a></li>
            <li><a href="#">Cầu thủ</a></li>
            </ul>
        </nav>
      </>
    )
}