import React from 'react';

class WordDisplay extends React.Component {
  render(){
    return(<div className='the-word'>{this.props.word}</div>)
  }
}

export default WordDisplay
