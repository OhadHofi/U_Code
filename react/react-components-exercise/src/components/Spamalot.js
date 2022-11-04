import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render(){
        let res = []
        for(let i=0; i<500; i++){
            res.push(<Spam />)
        }

        return res
    }
}

export default Spamalot

