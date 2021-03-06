import React from 'react';
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom';// 利用 NavLink 组件进行路由跳转
import { Top,Tab,TabItem, } from './style';
function Home(props){
    console.log(props);
    const {route} = props
    return (
        <div>
            <Top>
                <span className="iconfont">&#xe63d;</span>
                <span className="title">云音乐</span>
                <span className="iconfont">&#xe61b;</span>
            </Top>
            <Tab>
                <NavLink to="/recommend" activeClassName="selected"><TabItem><span > 推荐 </span></TabItem></NavLink>
                <NavLink to="/singers" activeClassName="selected"><TabItem><span > 歌手 </span></TabItem></NavLink>
                <NavLink to="/rank" activeClassName="selected"><TabItem><span > 排行榜 </span></TabItem></NavLink>
            </Tab>
            { renderRoutes (route.routes) }
        </div>
    )
}

export default React.memo(Home);