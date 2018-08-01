import React, { Component } from 'react'

export default (title) => WrappedComponent => class A extends Component {
  render() {
    const { age, ...otherProps } = this.props
    return (
      <div className="a-container">
        <div className="header">
          <div>{title}</div>
          <div>x</div>
        </div>
        <div>
          <WrappedComponent sex={'男'} {...otherProps} />
        </div>
      </div>
    )
  }
}