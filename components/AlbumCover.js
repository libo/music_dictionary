import React from 'react';

class AlbumCover extends React.Component {
  render(){
    return(
      <li className="cover" key="{this.props.url}">
        <img src={this.props.url} />
      </li>
    )
  }
}

export default AlbumCover
