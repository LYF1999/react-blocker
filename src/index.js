import React from 'react';

export default function (args) {
  return function (Target) {
    class Blocker extends React.Component {

      constructor(props) {
        super(props);
        if (typeof args === 'object') {
          this.addLifeCycle(args);
        }
      }

      addLifeCycle(lifecycle) {
        const {
          componentWillMount,
          componentWillReceiveProps,
          componentDidMount,
          shouldComponentUpdate,
          componentWillUpdate,
          componentDidUpdate,
          componentWillUnmount,
        } = lifecycle;
        if (componentWillMount) {
          this.componentWillMount = componentWillMount;
        }

        if (componentWillReceiveProps) {
          this.componentWillReceiveProps = componentWillReceiveProps;
        }

        if (shouldComponentUpdate) {
          this.shouldComponentUpdate = shouldComponentUpdate;
        }

        if (componentWillUpdate) {
          this.componentWillUpdate = componentWillUpdate;
        }

        if (componentDidUpdate) {
          this.componentDidUpdate = componentDidUpdate;
        }

        if (componentDidMount) {
          this.componentDidMount = componentDidMount;
        }

        if (componentWillUnmount) {
          this.componentWillUnmount = componentWillUnmount;
        }
      }

      render() {
        let result = null;

        if (typeof args === 'function') {
          result = args(this.props);
        } else if (typeof result === 'object') {
          const { blockFunc } = args;
          if (blockFunc) {
            result = blockFunc(this.props);
          }
        } else {
          throw new Error('invalid args');
        }

        if (result && !React.isValidElement(result)) {
          throw new Error('error type, please check the value which the func return');
        }

        return result || <Target {...this.props} />;
      }
    }
    return Blocker;
  };
}
