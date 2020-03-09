import React from 'react';
import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    return (
      <h1>VALUE: { this.props.value }</h1>
    )
  }
}

let mapStateToProps = (state) => {
    return {
      value : state.counter.value
    }
}

Counter = connect(mapStateToProps)(Counter)

export default Counter;


/*

  connect API

  connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [option])
  connect 는 react-redux 의 내장 API 이다. 이 함수는 React Component를 Redux Store에 연결 해준다.
  이 함수의 리턴값은 특정 컴포넌트 클래스의 props 를 store 의 데이터에 연결시켜주는 또 다른 함수를 리턴한다.
  리턴된 함수에 컴포넌트 인수로 넣어 실행하면, 기존 컴포넌트를 수정하는게 아니라 새로운 컴포넌트를 return 한다.

  mapStateToProps(state,[ownProps]): (function) store 의 state 를 컴포넌트의 props에 매핑시켜준다.
  ownProps 인수가 명시될 경우 이를 통해 함수 내부에서 컴포넌트의 props 값에 접근할 수 있다.

  mapDispatchToProps(dispatch, [ownProps]): ( Function or Object ) 컴포넌트의 특정 함수형 props를 실행햇을때,
  개발자가 지정한 action 을 dispatch 하도록 설정한다. ownProps 의 용도는 위 인수와 동일하다.


 */


