import React from 'react';
import AlbumCover from './AlbumCover'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {albums: [], word: props.word};
  }

  componentWillReceiveProps(nextProps) {
    this.state.word = nextProps.word

    if (this.state.word !== '') {
      this.fetchAlbums(this.state.word);
    }
  }

  render(){
    let items = this.state.albums.map(
      function(object) {
        return <AlbumCover
          uri={object.uri}
          imageUrl={object.images[1].url}
          key={object.id}/>
      }
    )

    return(
      <ul className="album-list">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          { items }
        </ReactCSSTransitionGroup>
      </ul>
    )
  }

  fetchAlbums(word){
    let apiUrl = "https://api.spotify.com/v1/search?type=album&q=" + word

    $.ajax(apiUrl).done(this.updateList.bind(this));
  }

  updateList(data){
    if(data.albums.total > 0) {
      let newList = data.albums.items.slice(0, 8).concat(this.state.albums)
      this.setState({albums: newList})
    }
  }
}

export default AlbumList
