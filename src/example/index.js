import React from 'react';
import { render } from 'react-dom';
import reactBlocker from '../../index';


@reactBlocker({
  componentWillMount() {
    console.log(this);
  },
  blockFunc: () => {
    return <div>blocked</div>;
  }
})
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
