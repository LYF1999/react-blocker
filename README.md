# react-blocker


### USAGE
You should ready this [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)

then....  

npm install react-blocker --save
```javascript

import reactBlocker from 'react-blocker';


@reactBlocker((props) => {
  // handle props and return a valid react element
  return (<div>you are blocked</div>)
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

```

Or you can use object as arguments
```javascript

@reactBlocker({
  componentWillMount() {},
  componentWillReceiveProps() {},
  blockFunc(props){
    return (<div>you are blocked</div>)
    // this is equivalent to the just use a function as a argument
  }
})
```

