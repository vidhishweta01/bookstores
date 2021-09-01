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
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

export default reducer;
