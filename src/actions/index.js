export const INCREMENT = 'INCREMENT' //카운터 값을 올린다
export const DECREMENT = 'DECREMENT' //카운터의 값을 낮춘다.
export const SET_DIFF = 'SET_DIFF' //버튼이 눌릴 때 더하거나 뺼 값을 설정한다

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function setDiff(value) {
  return {
    type: SET_DIFF,
    diff: value
  }
}