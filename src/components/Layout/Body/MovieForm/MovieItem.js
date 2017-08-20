import React from 'react';

export default class MovieItem extends React.Component {
  render() {
    return (
      <div>
      <p> {this.props.itemKey} : {this.props.itemValue}</p>
      </div>
    );
  }
}
