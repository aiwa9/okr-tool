export const ADD_OKR = 'ADD_OKR'

let nextOkrId = 0;

export function addOkr(text) {
   return {
      type: ADD_OKR,
      id: nextOkrId++,
      text
   };
}