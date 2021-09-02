export const CreateBook = (obj) => ({
  type: 'CreateBook',
  obj,
});

export const RemoveBook = (obj) => ({
  type: 'RemoveBook',
  obj,
});

export const ChangeFilter = (filterby) => ({
  type: 'ChangeFilter',
  filterby,
});
