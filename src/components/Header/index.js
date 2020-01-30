import React from "react";
import "./header.css";
import logo from './kostagram.jpg';
import Post from '../Post'

const Nav_brand_logo = {
    height: '45px',
    width: '176px',
    display: 'inline-block',
    padding: '10px 0 0 0'
};

class Header extends React.Component{
    render(){
        return (
           <div className="Nav">
             <div className="Nav-menus">
               <div className="Nav-brand">
               <a href="/"><img src={logo} style={Nav_brand_logo} alt="Logo" /></a>
                 <span className="search_bar">
                   {/* <form> */}
                  
                    
                      {/* <button onClick={this.OnShow}>button</button> */}
                    {/* </form> */}
                  </span>
               </div>
             </div>
           </div>
       );
    }   
}
export default Header;