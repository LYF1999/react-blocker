import React from 'react';
import { render } from 'react-dom';
import reactBlocker from '../../index';


@reactBlocker({ blockFunc: () => {
  return (<div>you are blocked</div>);
} })
class Example extends React.Component {

  render() {
    return (
      <div>
        hello world
      </div>
    );
  }
}

render(<Example />, document.getElementById('root'));
