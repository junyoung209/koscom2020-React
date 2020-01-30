import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Post.css";
import ss from './삼성.jpg';
import Popup from 'reactjs-popup';

const url = 'http://54.180.87.156:5000/outputs?stock_code=';
const url2 = 'http://54.180.87.156:5000/outputs_logo?stock_name=';
const url3 = 'http://54.180.87.156:5000/outputs_pop?stock_code=';
class Post extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log('clicked');
  };
  render() {
    const {dataInformation} = this.props;
    return (
      dataInformation.map(data=>{
    return (
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src={ url2 + data.stock_name } alt={data.stock_name} />
            </div>
            <div className="Post-user-nickname">
              <span>{ data.stock_name }</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            
            {/* { this.state.isOpen && (
              <dialog className="dialog" style={{ position: "absolute" }} open 
              onClick={ this.handleShowDialog }>
                <img className="image" src= { url + data.stock_code } onClick={ this.handleShowDialog }/>
                </dialog>
            )} */}
            <Popup trigger={<img src= { url + data.stock_code }/>} position="right center">
              <div>
              <img className="big" src= { url3 + data.stock_code }/>
          <h1 className="stock-name">{ data.stock_name }</h1>
              </div>
            </Popup>
          </div>
        </div>
        <div className="Post-caption">
          <strong>{ data.stock_name }</strong> { data.stock_code }
        </div>
      <div className="Post-caption-tag">
      <Link to={`/search/${data.stock_sector}`}>#{ data.stock_sector } </Link>
      <Link to={`/search/${data.delta}`}>#{ data.delta } </Link>
          <span>#{ data.price }원 </span>
          <span>#{ data.date } </span>
      
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