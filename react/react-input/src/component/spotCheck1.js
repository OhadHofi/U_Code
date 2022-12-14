import React, { Component } from 'react';

class InputTest extends React.Component {
    constructor(){
        super()
        this.state = {
            testText: "ohad",
            hasUnderstood: false
          }
    }

    changeText = () => { 
        this.setState({
          testText: "Something else"
        })
      }

      updateCheckbox = (event) => {
        this.setState({
          hasUnderstood: event.target.checked
        })
      }
    alertText = () => alert(this.state.testText)

    render() {
      return (
        <div>
        <input type="text" />
        <button onClick={this.alertText}>Alert</button>
        <input type="checkbox" checked={this.state.hasUnderstood} onChange={this.updateCheckbox}/>
      </div>
      )
    }
  }
  
  
export default InputTest;