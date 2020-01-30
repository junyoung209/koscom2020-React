import React, { Component, useContext } from "react";
import { Link } from 'react-router-dom';
import './list.css';
import StockContext from '../../context/StockContext';
import Popup from 'reactjs-popup';

// function List(props) {
//     const stockContext = useContext(StockContext);
//     return (
//         console.log(props)
//     )
// }
const url = 'http://54.180.87.156:5000/outputs?stock_code=';
const url2 = 'http://54.180.87.156:5000/outputs_logo?stock_name=';
const url3 = 'http://54.180.87.156:5000/outputs_pop?stock_code=';

class List extends React.Component {
  render() {
    const {dataInformation} = this.props;
    return (
      dataInformation.map(data=>{
    return (
    <div className="_pbwg8">
        <div className="Post-user">
            <div className="Post-user-avatar">
              <img src={ url2 + data.stock_name } alt={data.stock_name} />
            </div>
            <div className="Post-user-nickname">
              <span>{ data.stock_name }</span>
            </div>
          </div>
         <div className="_jjzlb">
            <img src={ url + data.stock_code } className="exPex"/>
            {/* <Popup trigger={<img src={ url + data.stock_code } className="exPex"/>} position="right center">
              <div>
                  <img className="big" src= { url3 + data.stock_code }/>
                  <h1 className="stock-name">{ data.stock_name }</h1>
              </div>
            </Popup> */}
         </div>
      </div>
    )}
    ))
    }
}
export default List;