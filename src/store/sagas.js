import { takeLatest, put, call } from 'redux-saga/effects';


function apiGet(text){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + 'da api');
    }, 2000);
  });
}

function* asyncAddTodo(action) {
  try {
    const response = yield call(apiGet, action.payload.text);
    yield put({ type: 'ADD_TODO', payload: { text: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

export default function* root() {
  yield [
    takeLatest('ASYNC_ADD_TODO', asyncAddTodo), // takeLatest é usado para pegar apenas a última chamada
  ];
}





// import { delay } from 'redux-saga';
// import { takeLatest, put, call, select } from 'redux-saga/effects';

// function apiGet(text, length) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, text: 'Fazer café' },
//         { id: 2, text: 'Fazer café 2' },
//         { id: 3, text: 'Fazer café 3' },
//         { id: 4, text: 'Fazer café 4' },
//       ]);
//     }, 2000);
//   });
// }

// function* getTodoList() {
//   try {
//     const response = yield call(apiGet); // call é usado para chamar funções que retornam promises

//     yield put({ type: 'SUCCESS_TODO_LIST', payload: { data: response } }); // put é usado para disparar uma action
//   } catch (err) {
//     yield put({ type: 'FAILURE_TODO_LIST' });
//   }
// }

// export default function* root() {
//   yield [
//     takeLatest('REQUEST_TODO_LIST', getTodoList), // takeLatest é usado para pegar apenas a última chamada
//   ];
// }
