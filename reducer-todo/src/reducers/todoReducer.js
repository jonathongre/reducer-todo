export const initialState = [
    {
      item: "Make Bed",
      completed: false,
      id: new Date()
    },
    {
        item: "Brew Coffee",
        completed: false,
        id: new Date()
      },
      {
        item: "Take Shower",
        completed: false,
        id: new Date()
      },
  ];
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case "TOGGLE_TODO":
                return [
                    ...state.map(todo =>
                    action.payload === todo.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
                )
            ];
        case "CLEAR_COMPLETED":
            return [...state.filter(todo => !todo.completed)];
      default:
        return state;
    }
  };