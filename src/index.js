import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Hello extends React.Component {
    constructor(props){
        super(props);

        this.state={
            posts: {},
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/greeting")
        .then( response => {
            this.setState({posts : response.data});
        }).catch(error =>{
            console.log(error);
        })
    }

    render(){
        const posts = this.state.posts;
        return (
            <div>
                <b>Id:</b>{posts.id} <b>Content:</b>{posts.content}
            </div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById("root"));