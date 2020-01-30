import React, { Fragment, Component } from 'react';

class Tag extends Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.tag);
    }
    
    render(){
        return (
            <div>
                { this.props.match.params.tag }
            </div>
        );
    }
}

export default Tag;