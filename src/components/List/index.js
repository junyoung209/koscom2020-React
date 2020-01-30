import React, { Component, useContext } from "react";
import { Link } from 'react-router-dom';
import './list.css';
import StockContext from '../../context/StockContext';

// function List(props) {
//     const stockContext = useContext(StockContext);
//     return (
//         console.log(props)
//     )
// }
const url = 'http://54.180.87.156:5000/outputs?textID=';
const url2 = 'http://54.180.87.156:5000/outputs_logo?stock_name=';

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
            {/* <span>{ data.nickname }</span> */}

            

         </div>
      </div>
    )}
    ))
    }
}
export default List;