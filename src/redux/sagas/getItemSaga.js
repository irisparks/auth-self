import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getItemsSaga() {
    try {
        const items = yield axios.get("/api/shelf");
        yield put({type:"SET_ITEMS",payload:items.data});
    } catch (error) {
      console.log('Add item request failed', error);
    }
  }

  export default getItemsSaga;
  