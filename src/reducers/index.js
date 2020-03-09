import { INCREMENT , DECREMENT, SET_DIFF } from "../actions";
import { combineReducers} from "redux"; //combineReducers 는 여러갸으ㅏㅣ reducer를 한개로 합칠 때 사용 되는 redux 내장 메소드이다.

const counterInitialState = {
  value: 0,
  diff: 1,
}

const counter = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff
      })
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff
      })
    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.diff
      })
    default:
      return state;
  }

}

const extra = (state = {value: 'this_is_extra_reducer' }, action) => {

  switch (action.TYPE) {
    default:
      return state;
  }
}

const counterApp = combineReducers({
  counter,
  extra
})

// {
//   counter: { value: 0, diff: 1 }
//   extra: { value: 'this_is_extra_reducer' }
// }

//reducer를 여러개로 분리하여 작성할 땐, 서로 직접적인 관계가 없어야 한다.



export default counterApp;


