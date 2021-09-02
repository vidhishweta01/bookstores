export const CreateBook = (obj) => ({
  type: 'CREATE_BOOK',
  obj,
});

export const RemoveBook = (obj) => ({
  type: 'REMOVE_BOOK',
  obj,
});

export const ChangeFilter = (filterby) => ({
  type: 'CHANGE_FILTER',
  filterby,
});
