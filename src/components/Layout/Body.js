import React from 'react';

import MovieForm from './Body/MovieForm';
import InputForm from './Body/InputForm';


;
export default class Body extends React.Component {
  render() {
    return (
      <div>
        <h1> Body </h1>
        <MovieForm movie={this.props.movie} />
        <InputForm />
      </div>
    );
  }
}
