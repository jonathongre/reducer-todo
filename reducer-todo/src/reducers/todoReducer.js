export const initialState = [
    {
      item: "Make Bed",
      completed: false,
      id: 1
    },
    {
        item: "Brew Coffee",
        completed: false,
        id: 2
      },
      {
        item: "Take Shower",
        completed: false,
        id: 3
      },
  ];
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
      default:
        return state;
    }
  };