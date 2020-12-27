import React from "react";
import { Menu,MenuItem } from '@material-ui/core';
import "./style.css"

export default function MyMenu(props)
{
    return (
        <>
       <nav className="stroke">
            <ul>
            <li><a href="/home">Trang chủ</a></li>
            <li><a href="/news">Tin tức</a></li>
            <li><a href="/ranking">Bảng xếp hạng</a></li>
            <li><a href="/club">Câu lạc bộ</a></li>
            <li><a href="/statistic">Thống kê</a></li>
            <li><a href="/player">Cầu thủ</a></li>
            </ul>
        </nav>
      </>
    )
}