// export function addTodo(text) {
//   return {
//     type: 'ADD_TODO',
//     payload: { text },
//   }
// }

// No lugar de disparar uma action diretamente,
//  vamos disparar uma action que será interceptada pelo saga,
// que fará a chamada à API e disparará uma nova action com
//  os dados retornados pela API.
export function addTodo(text) {
  return {
    type: 'ASYNC_ADD_TODO',
    payload: { text },
  }
}