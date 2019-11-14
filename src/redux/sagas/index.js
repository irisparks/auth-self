import { all,takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getItemsSaga from './getItemSaga';
import addItemSaga from './addItemSaga';
import deleteItemSaga from './deleteItemSaga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery('DELETE_ITEM', deleteItemSaga)
  yield takeEvery('GET_ITEMS',getItemsSaga);
  yield takeEvery('ADD_ITEM',addItemSaga);
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
