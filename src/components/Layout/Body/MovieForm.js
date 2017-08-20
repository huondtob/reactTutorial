import React from 'react';

import MovieItem from './MovieForm/MovieItem';


export default class MovieForm extends React.Component {
  render() {
    const movieItems = [];
    const itemKeys = Object.keys(this.props.movie);
    const itemValues = Object.values(this.props.movie);

    for (let i = 0; i < itemKeys.length; i++){
      movieItems.push(<MovieItem itemKey={itemKeys[i]} itemValue={itemValues[i]}/>);
    }
    return (
      <div>
      <h2> MovieForm </h2>
      {movieItems}
      </div>
    );
  }
}
