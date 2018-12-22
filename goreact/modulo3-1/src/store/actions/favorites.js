export const addFavoriteRequest = repository => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: { repository },
});

export const addFavoriteRequestSuccess = data => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: { data },
});
