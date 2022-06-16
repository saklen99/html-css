const initialState = {
  list: []
}

const reducer = (state = initialState, action) => {
  console.log('reducer', action.payload)
  switch (action.type) {
    case 'add':
      return {
        ...state,
        list: [...state.list, { ...action.payload }]
      }

    case 'delete':
      console.log('action', action.payload)
      return {
        ...state,
        list: state.list.filter((list) => list.id !== action.payload)
      }

    case 'update':
      console.log('action', action.payload)
      return {
        ...state,
        list: state.list.filter((list) => list.id === action.payload),
        }

    default:
      return state;
  }
}

export default reducer;