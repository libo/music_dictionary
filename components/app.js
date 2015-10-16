import React from 'react';
import AlbumList from './AlbumList'
import WordDisplay from './WordDisplay'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {word: ''};
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
    let apiUrl = "http://randomword.setgetgo.com/get.php"

    $.ajax(apiUrl).done(this.updateWord.bind(this));
  }

  updateWord(data) {
    this.setState({word: data})
  }

  componentWillMount() {
    this.fetchWord();
    // setInterval(this.fetchWord.bind(this), 3000);
  }
}

export default App;
