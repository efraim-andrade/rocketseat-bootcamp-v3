const INITIAL_STATE = [
  { id: 1, text: 'fazer cafe' },
  { id: 2, text: 'estudar react' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
