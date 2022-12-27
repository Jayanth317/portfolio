import React from 'react';
import StickyNote from './Stickynotes';
import './Stickynotes.css';
 
class Stickynotes extends React.Component {
  state = {
    notes: [
      { text: 'Note 1' },
      { text: 'Note 2' }
    ]
  }

  handleNoteChange = (index, text) => {
    this.setState(state => {
      const notes = state.notes.slice();
      notes[index].text = text;
      return { notes };
    });
  }

  render() {
    return (
      <div className="sticky-notes-app">
        {this.state.notes.map((note, index) => (
          <StickyNote
            key={index}
            text={note.text}
            onChange={text => this.handleNoteChange(index, text)}
          />
        ))}
      </div>
    );
  }
}

export default Stickynotes;