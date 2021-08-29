import React, {Component} from 'react';
import axios from 'axios';
class UserData extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(
        async response => {
            await this.setState({users: response.data})
        }
    )
}

render(){

    var user1 = this.state.users? this.state.users[0].name : "load users"; 
    return(
    
        <div>
            {user1}
            <button onClick={this.getData}> GET DATA CONSOLE </button>
        </div>
    )
}
}

export default UserData;