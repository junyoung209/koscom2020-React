import React, { Component } from 'react';

const apiURL='http://localhost:5000/'

class PostsForm extends Component {
    constructor(props){
      super(props);
      this.state={
        id:'',
        pw:'',
      };
      this.onChange =this.onChange.bind(this);
      this.onSubmit =this.onSubmit.bind(this);
    }
    onChange(e){
      this.setState({
        [e.target.name]:e.target.value
      });
    }
    onSubmit(e){
      e.preventDefault();
      const post ={
        id:this.state.id,
        pw:this.state.pw
      }
  /* 전송방식은 post */
      fetch(apiURL+'process',{
        method :"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(post)
      })
      .then(res=>res.json())
      .then(data=>console.log(data));
    }
    render() {
      const {id,pw} = this.state;
      const {onChange,onSubmit} = this;
      return (
        <div>
          <h3>로그인</h3>
          <form onSubmit={onSubmit}>
            <div>
              <label>   ID    : </label>
              <input type="text" name="id" value={id} onChange={onChange}/>
            </div>
            <div>
              <label>Password : </label>
              <input type="text" name="pw" value={pw} onChange={onChange}/>
            </div>
            <div><button type="submit">전송</button></div>
          </form>
          
        </div>
      );
    }
  }
  
  export default PostsForm;