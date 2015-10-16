import React from 'react';
import AlbumList from './AlbumList'
import WordDisplay from './WordDisplay'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {word: '', timer: null};
  }

  render() {
    return (
      <div>
        <AlbumList word={this.state.word} />
        <WordDisplay word={this.state.word} />
      </div>
    )
  }

  fetchWord() {
    clearTimeout(this.state.timer);

    let apiUrl = "http://randomword.setgetgo.com/get.php"
    $.ajax(apiUrl).done(this.updateWord.bind(this));
  }

  updateWord(data) {
    this.setState({word: data})

    this.state.timer = setTimeout(this.fetchWord.bind(this), 2000);
  }

  componentWillMount() {
    this.fetchWord();
  }
}

export default App;
