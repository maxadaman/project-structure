// export default (initialState: any) => (reducerMap: any) => (state = initialState, action: any) => {
//   const reducer = reducerMap[action.type];
//   return reducer ? reducer(state, action) : state;
// };
//
import { Action } from 'redux';
type Handlers<State, Types extends string, Actions extends Action<Types>> = {
  readonly [Type in Types]: (state: State, action: Actions) => State
}
export const createReducer = <State, Types extends string, Actions extends Action<Types>>(
  initialState: State,
  handlers: Handlers<State, Types, Actions>,
) => (state = initialState, action: Actions) =>
  handlers.hasOwnProperty(action.type) ? handlers[action.type as Types](state, action) : state;
