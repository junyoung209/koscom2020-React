import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Post.css";

const url = 'http://54.180.87.156:5000/outputs?textID=';
class Post extends React.Component {

  render() {
    const {dataInformation} = this.props;
    console.log('jubin: '+dataInformation);
    return (
      dataInformation.map(data=>{
    return (
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src={ url + data.stock_code } alt={data.stock_name} />
            </div>
            <div className="Post-user-nickname">
              <span>{ data.stock_name }</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img src= { url + data.stock_code } />
          </div>
        </div>
        <div className="Post-caption">
          <strong>{ data.stock_name }</strong> { data.stock_code }
        </div>
      <div className="Post-caption-tag">
      <Link to={`/search/${data.stock_sector}`}>#{ data.stock_sector }</Link>
      
      </div>
    </article>
    // <article className="Post" ref="Post">
    //     <header>
    //       <div className="Post-user">
    //         <div className="Post-user-avatar">
    //           <img src={ data.avatar } alt={data.nickname} />
    //         </div>
    //         <div className="Post-user-nickname">
    //           <span>{ data.nickname }</span>
    //         </div>
    //       </div>
    //     </header>
    //     <div className="Post-image">
    //       <div className="Post-image-bg">
    //         <img src={ data.image } />
    //       </div>
    //     </div>
    //     <div className="Post-caption">
    //       <strong>{ data.nickname }</strong> { data.caption }
    //     </div>
    //   <div className="Post-caption-tag">
    //   <Link to={`/search/${data.industry}`}>#{ data.industry }</Link>
      
    //   </div>
    // </article>
    )}
    ))
    }
}
export default Post;