import React from 'react';
import { CSSTransition } from 'react-transition-group';
class Animation extends React.Component {
  state = {
    show: false
  }

  toggleShow = () => {
    this.setState(state => ({ show: !state.show }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle</button>
        <CSSTransition
          in={this.state.show}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div>Hello World!</div>
        </CSSTransition>
      </div>
    );
  }
}
export default Animation;