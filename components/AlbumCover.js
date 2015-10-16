import React from 'react';

class AlbumCover extends React.Component {
  render(){
    return(
      <li className="cover" key="{this.props.key}">
        <a href={this.props.uri}><img src={this.props.imageUrl} /></a>
      </li>
    )
  }
}

export default AlbumCover
