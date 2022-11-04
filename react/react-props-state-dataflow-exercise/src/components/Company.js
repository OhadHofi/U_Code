import React, { Component } from 'react';
import SubCompany from './SubCompany'

class Company extends Component {
  render() {
    return (
      <div>
        <SubCompany name={this.props.name} />
        <p>{this.props.revenue}</p>
      </div>
    )

  }
}

export default Company