import React, { Component } from 'react';

const apiURL='http://localhost:5000/'

class Posts extends Component {
    /* 컴포넌트 생성시 */
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    async componentWillMount() {
        try{
            fetch(apiURL+'process')
            .then(res => res.json())
            .then(data => this.setState({
                posts: data
            }));

        } catch(e){
            console.log(e);
        }
        
    }
    render() {
        const { posts } = this.state;
        const postsList = posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <span>{post.content}</span>
            </div>
        ));
        return (
            <div>
                {postsList}
            </div>
        );
    }
}
export default Posts;