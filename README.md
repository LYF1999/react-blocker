# react-blocker


### USAGE
You should ready this [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)

then....  

npm install react-blocker --save
```javascript

import reactBlocker from 'react-blocker';


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

```