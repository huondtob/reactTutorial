import React from 'react';

import InputItem from './InputForm/InputItem';


export default class MovieItem extends React.Component {
  render() {
    return (
      <div>
      <h2> InputForm </h2>
      < InputItem />
      < InputItem />
      < InputItem />
      <button type="button">Save Movie</button>
      </div>
    );
  }
}
