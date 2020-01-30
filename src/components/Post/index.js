import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Post.css";
import ss from './삼성.jpg';
import Popup from 'reactjs-popup';
import empty from './empty.png';
import full from './full.png';
import axios from 'axios';

const url = 'http://54.180.87.156:5000/outputs?stock_code=';
const url2 = 'http://54.180.87.156:5000/outputs_logo?stock_name=';
const url3 = 'http://54.180.87.156:5000/outputs_pop?stock_code=';

class Post extends React.Component {
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
            <Popup trigger={<img src= { url + data.stock_code }/>} position="right center">
              <div>
              <img className="big" src= { url3 + data.stock_code }/>
              <h1 className="stock-name">{ data.stock_name }</h1>
              </div>
            </Popup>
          </div>
        </div>
        <div className="Post-caption">
          <strong>{ data.stock_name }</strong>({ data.stock_code })
          { data.favorite === "0" ? 
          <img className="heart" src={ empty }/> : <img className="heart" src={ full }/>} 
        </div>
      <div className="Post-caption-tag">
      <Link to={`/search/${data.stock_sector}`}><strong>#{ data.stock_sector }</strong> </Link>
      <Link to={`/search/${data.delta}`}>
        { data.delta === '상승세' ? <span className="up">#{ data.delta }</span> : 
        data.delta === '하락세' ? <span className="down">#{ data.delta }</span> : <span className="soso">#{ data.delta }</span> }</Link>
          <span><strong> #{ data.price }원</strong> </span>
          <span><strong>#{ data.date }</strong> </span>
      
      </div>
    </article>
    )}
    ))
    }
}
export default Post;