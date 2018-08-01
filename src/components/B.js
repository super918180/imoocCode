import React, { Component } from 'react'
import A from './A'

class B extends Component {
  render() {
    return (
      <div>
        我的名字叫：{this.props.name}
        <br />
        我的年龄是：{this.props.age}
        <br />
        我的性别是：{this.props.sex}
        <br />
        <img src={require('../images/B.png')} alt="" />
      </div>
    )
  }
}

// export default A(B, '提示')
export default A('提示')(B)