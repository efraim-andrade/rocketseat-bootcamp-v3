const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case 'ADD_FAVORITE':
      return [...state, {
        id: Math.random,
        name: 'facebook/react',
        description: 'a declarative eficient tal tal',
        url: 'http://github.com/facebook/react',
      }];

    default:
      return state;
  }
}
