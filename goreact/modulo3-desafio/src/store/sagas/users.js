import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(
      api.get,
      `/users/${action.payload.user}`,
    );

    const isDuplicated = yield select(state => state.users.data.find(
      user => user.id === data.id,
    ));

    if (isDuplicated) {
      yield put(UserActions.addUsersFailure('Usuario duplicado'));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        user: data.login,
        avatar: data.avatar_url,
      };

      yield put(UserActions.addUsersSuccess(userData));
    }
  } catch (err) {
    UserActions.addUsersFailure('Erro ao adicionar usuario');
  }
}
