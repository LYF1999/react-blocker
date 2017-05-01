import React from 'react';

export default function requireBlocker({ blockFunc }) {
  return function (Target) {
    class Blocker extends React.Component {
      render() {
        const result = blockFunc(this.props);
        if (result && (typeof result !== 'function' && !React.isValidElement(result))) {
          throw new Error('error type, please check the value which the func return');
        }
        return result || <Target {...this.props} />;
      }
    }
    return Blocker;
  };
}
