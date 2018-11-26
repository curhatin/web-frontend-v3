import React, { Component } from 'react';
import Navbar from '../MainComponents/Navbar/Navbar';
import UserNavbar from '../MainComponents/UserNavbar/UserNavbar';
import Update from  '../MainComponents/Update/Update'

class UpdateStory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Navbar />
                <UserNavbar />
                <Update />
            </div>
         );
    }
}
 
export default UpdateStory;