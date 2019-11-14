import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addItemSaga(action) {
    try {
        yield axios.post("/api/shelf", action.payload)
        yield put({type:"GET_ITEMS"});
    } catch (error) {
      console.log('Add item request failed', error);
    }
  }

  export default addItemSaga;
  