import React from 'react';
var $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {word: ''};
  }

  render() {
    return ( <p>{ this.state.word }</p> )
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
    setInterval(this.fetchWord.bind(this), 1000);
  }
}

export default App;
