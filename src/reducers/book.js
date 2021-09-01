const initialState = [
  {
    id: 1,
    title: "I don't care 1",
    category: 'Action',
  },
  {
    id: 2,
    title: "I don't care 2",
    category: 'horror',
  },
  {
    id: 3,
    title: "I don't care 3",
    category: 'learning',
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CreateBook': {
      return [...state, action.obj];
    }
    case 'RemoveBook':
      return state.filter((book) => book.id !== action.obj.id);
    default: return state;
  }
};

export default reducer;
