import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout(props)
{
    return (
        <>
            <Header/>
                <div style={{minHeight:'100vh'}}>
                    {props.children}
                </div>
            <Footer/>
        </>
    )
}

export default Layout;
