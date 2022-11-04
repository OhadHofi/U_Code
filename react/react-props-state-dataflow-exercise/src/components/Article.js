import React, { Component } from 'react';

class Article extends Component {
  render() {
    return <div>{this.props.info.type} {this.props.info.color}</div>
  }
}

export default Article