import React from "react";
import './list.css';

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
         </div>
      </div>
    )}
    ))
    }
}
export default List;