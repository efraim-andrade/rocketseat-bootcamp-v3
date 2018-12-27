/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

/**
 * Actions
 */

export const Creators = {
  addUsersRequest: (user, latitude, longitude) => ({
    type: Types.ADD_REQUEST,
    payload: {
      user,
      latitude,
      longitude,
    },
  }),

  addUsersSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addUsersFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};


/**
 * Reducer
 */

const INITIAL_STATE = {
  loading: false,
  data: [
    {
      id: 28229600,
      avatar: 'https://avatars0.githubusercontent.com/u/28229600?v=4',
      name: 'Efraim Andrade',
      user: 'efraim-andrade',
      latitude: -23.5439948,
      longitude: -46.6065452,
    },
  ],
  error: null,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [
          ...state.data,
          action.payload.data,
        ],
      };

    case Types.ADD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    default:
      return state;
  }
}
