import React from 'react';
import AlbumCover from './AlbumCover'

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {albums: [], word: props.word};
  }

  componentWillReceiveProps(nextProps) {
    this.state.word = nextProps.word

    // if (this.state.word !== '') {
    //   this.fetchAlbums(this.state.word);
    // }

    this.fetchAlbums('banana')
  }

  render(){
    return(
      <ul className="album-list">
        {
          this.state.albums.map(
            function(object) {
              return <AlbumCover url={object.images[1].url} key={object.id}/>
            }
          )
        }
      </ul>
    )
  }

  fetchAlbums(word){
    let apiUrl = "https://api.spotify.com/v1/search?type=album&q=" + word

    $.ajax(apiUrl).done(this.updateList.bind(this));
  }

  updateList(data){
    if(data.albums.total > 0) {
      this.setState({albums: data.albums.items})
    }
  }
}

export default AlbumList
