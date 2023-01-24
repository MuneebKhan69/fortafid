import axios from 'axios';
import Toast from 'react-native-toast-message';
import {Common} from '../../config';
import {loaderStart, loaderStop} from '../actions';
import {store} from '../index';

axios.defaults.baseURL = Common.baseURL;
axios.defaults.timeout = Common.defaultTimeout;

function storeUpdate() {
  let state = store.getState()?.reducer;
  let user_authentication = state?.token;

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${user_authentication}`;
}

export default async function postApi(
  endpoint,
  params = null,
  isFormData = false,
  successToast = true,
  startLoader = true,
  stopLoader = true,
) {
  let newParams = params;
  storeUpdate();
  if (startLoader) {
    loaderStart();
  }
  if (isFormData) {
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    newParams = new FormData();
    for (let key in params) {
      newParams.append(key, params[key]);
    }
  } else {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  }
  try {
    const response = await axios.post(endpoint, newParams);
    if (stopLoader) {
      loaderStop();
    }
    {
      successToast &&
        Toast.show({
          text1: response.data.message,
          type: 'success',
          visibilityTime: 5000,
        });
    }
    return response.data;
  } catch (e) {
    loaderStop();
    console.log('Error', e.response);
    if (
      e?.message.includes('timeout of ') &&
      e?.message.includes('ms exceeded')
    ) {
      Toast.show({
        text1: "Can't connect to server",
        textStyle: {textAlign: 'center'},
        type: 'error',
        visibilityTime: 5000,
      });
    } else if (e.response?.data?.message) {
      Toast.show({
        text1: e.response.data.message,
        textStyle: {textAlign: 'center'},
        type: 'error',
        visibilityTime: 5000,
      });
    } else {
      Toast.show({
        text1: e?.message,
        textStyle: {textAlign: 'center'},
        type: 'error',
        visibilityTime: 5000,
      });
    }
    return null;
  }
}
