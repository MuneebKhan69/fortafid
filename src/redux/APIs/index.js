import {Common, NavService} from '../../config';
import Toast from 'react-native-toast-message';
import postApi from '../RequestTypes/post';
import getApi from '../RequestTypes/get';
// import putApi from '../RequestTypes/put';
import * as EmailValidator from 'email-validator';
import {
  loaderStart,
  loaderStop,
  logoutUser,
  saveToken,
  saveUser,
} from '../actions';
import {Platform} from 'react-native';
import moment from 'moment';
import {store} from '../Middleware';

var passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema.is().min(8).is().max(100);

export async function login(email, password) {
  if (!email && !password)
    return Toast.show({
      text1: 'Please enter all info',
      type: 'error',
      visibilityTime: 3000,
    });
  if (!EmailValidator.validate(email))
    return Toast.show({
      text1: 'Email not valid',
      type: 'error',
      visibilityTime: 3000,
    });
  if (!schema.validate(password))
    return Toast.show({
      text1: 'Password not valid (Use atleast eight character)',
      type: 'error',
      visibilityTime: 3000,
    });

  const params = {
    email,
    password,
    device_type: Platform.OS,
    device_token: '123',
  };

  const data = await postApi('user/authenticate', params, false);

  if (data) {
    saveUser(data.data);
    saveToken(data.access_token);
    NavService.reset(0, [{name: 'AppStack'}]);
  }
}

export async function register(email) {
  if (!email)
    return Toast.show({
      text1: 'Please enter all info',
      type: 'error',
      visibilityTime: 3000,
    });
  if (!EmailValidator.validate(email))
    return Toast.show({
      text1: 'Email not valid',
      type: 'error',
      visibilityTime: 3000,
    });
  const params = {
    email,
  };

  const data = await postApi('user', params, false);

  if (data) {
    NavService.navigate('Verification', {email});
  }
}

export async function verifyCode(code, email) {
  const params = {
    code,
    email,
  };

  const data = await postApi('user/email/verify', params);

  if (data) {
    NavService.navigate('CompleteProfile', {email});
  }
}

export async function resendVerifyCode(email) {
  const params = {
    email,
  };

  await postApi('user/email/verify-resend', params);
}

export async function signup(email, username, password, fullname) {
  if (!password || !username || !email || !fullname)
    return Toast.show({
      text1: 'Please enter all info',
      type: 'error',
      visibilityTime: 3000,
    });
  if (!schema.validate(password))
    return Toast.show({
      text1: 'Password not valid (Use atleast eight character)',
      type: 'error',
      visibilityTime: 3000,
    });
  if (username.length < 8)
    return Toast.show({
      text1: 'Username not valid (Use atleast eight character)',
      type: 'error',
      visibilityTime: 3000,
    });

  const params = {
    email,
    username,
    password,
    full_name: fullname,
  };

  const data = await postApi('user/username', params, true, true, false);

  if (data) {
    login(email, password);
  } else {
  }
}

export async function forgetPassword(email) {
  if (!email)
    return Toast.show({
      text1: 'Please enter your email',
      type: 'error',
      visibilityTime: 3000,
    });
  if (!EmailValidator.validate(email))
    return Toast.show({
      text1: 'Email not valid',
      type: 'error',
      visibilityTime: 3000,
    });

  const data = await getApi(`user/password/reset?email=${email}`);

  if (data) {
    NavService.navigate('ResetPassword', {email});
  }
}

// export async function resetPassword(code, email, password, confirmPassword) {
//   if (!code)
//     return Toast.show({
//       text1: 'Please enter the code',
//       type: 'error',
//       visibilityTime: 3000,
//     });
//   if (code.length < 4)
//     return Toast.show({
//       text1: 'Code length should be 4 characters',
//       type: 'error',
//       visibilityTime: 3000,
//     });
//   if (!password)
//     return Toast.show({
//       text1: 'Please enter your password',
//       type: 'error',
//       visibilityTime: 3000,
//     });
//   if (!confirmPassword)
//     return Toast.show({
//       text1: 'Please enter your confirm password',
//       type: 'error',
//       visibilityTime: 3000,
//     });
//   if (!schema.validate(password))
//     return Toast.show({
//       text1: 'Password not valid (Use atleast eight character)',
//       type: 'error',
//       visibilityTime: 3000,
//     });
//   if (password !== confirmPassword)
//     return Toast.show({
//       text1: 'Password do not match',
//       type: 'error',
//       visibilityTime: 3000,
//     });

//   const params = {
//     code,
//     email,
//     password,
//   };

//   const data = await putApi('user/password/reset', params);

//   if (data) {
//     NavService.reset(0, [{name: 'AuthStack'}]);
//   }
// }

export async function resendForgetPasswordCode(email) {
  const data = await getApi(`user/password/reset?email=${email}`);
}

// export async function changePassword(
//   oldPassword,
//   newPassword,
//   confirmNewPassword,
// ) {
//   if (!schema.validate(newPassword))
//     return Toast.show({
//       text1: 'Password not valid (Use atleast eight character)',
//       type: 'error',
//       visibilityTime: 3000,
//     });
//   if (newPassword !== confirmNewPassword)
//     return Toast.show({
//       text1: 'Passwords does not match',
//       type: 'error',
//       visibilityTime: 3000,
//     });

//   const params = {
//     old_password: oldPassword,
//     new_password: newPassword,
//   };

//   const data = await putApi('user/password', params);

//   if (data) {
//     NavService.goBack();
//   }
// }

export async function logout() {
  loaderStart();
  logoutUser();
  setTimeout(() => {
    loaderStop();
    NavService.reset(0, [{name: 'AuthStack'}]);
  }, 1000);
}

export async function updateProfile(
  userId,
  full_name,
  mobile,
  imageUrl,
  imageType,
) {
  if (!full_name) {
    Toast.show({
      text1: 'Name is required',
      type: 'error',
      visibilityTime: 5000,
    });
    return;
  }
  if (!mobile) {
    Toast.show({
      text1: 'Phone Number is required',
      type: 'error',
      visibilityTime: 5000,
    });
    return;
  }

  const params = {
    full_name,
    mobile,
  };

  if (imageType) {
    params.avatar = {
      uri: imageUrl,
      name: `Profile${Date.now()}.${imageType.slice(
        imageType.lastIndexOf('/') + 1,
      )}`,
      type: imageType,
    };
  }

  const response = await postApi(`user/${userId}`, params, true);
  if (response?.status == 1) {
    saveUser(response.data);
    NavService.goBack();
  }

  return;
}

export async function getPolicies(type) {
  const response = await getApi(`content?type=${type}`, false);
  if (response?.data?.length) return response?.data;
  return [];
}

export async function getCategories() {
  const response = await getApi('categories', false);
  if (response?.data?.length) return response?.data;
  return [];
}

export async function getSlides() {
  const response = await getApi('slides', false);
  if (response?.data?.length) return response?.data;
  return [];
}

export async function getVideos() {
  const response = await getApi(`videos`, false);
  if (response?.data?.length) return response?.data;
  return [];
}

export async function getRooms() {
  const response = await getApi('rooms', false);
  if (response?.data?.length) return response?.data;
  return [];
}

export async function getNotifications() {
  const response = await getApi('notification', false);
  if (response?.data?.length) return response?.data;
  return [];
}

export async function getQuizzes() {
  const response = await getApi('tests', false);
  if (response?.data?.length) return response?.data;
  return [];
}

export async function purchaseApi(receipt, type) {
  const params = {
    receipt,
    type,
    source: Platform.OS == 'ios' ? 'apple' : 'google',
  };
  const response = await postApi(`subscription`, params);
  console.log('Purchase response', response);
  if (response?.status == 1) {
    saveUser(response?.data?.user);
    NavService.goBack();
  }
  return;
}

export async function submitQuiz(quiz_ids, answer_ids) {
  const params = new FormData();
  params.append('type', 'quiz');
  params.append('date', moment().format('YYYY-MM-DD'));
  quiz_ids.map((item, index) => {
    params.append(`quiz_ids[${index}]`, item);
    params.append(`answer_ids[${index}]`, answer_ids[index]);
  });
  loaderStart();
  fetch(Common.baseURL + 'user/test', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.getState()?.reducer.token}`,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    body: params,
  })
    .then(response => response.json())
    .then(data => {
      loaderStop();
      Toast.show({
        text1: data?.message,
        type: 'success',
        visibilityTime: 5000,
      });
    })
    .catch(e => {
      loaderStop();
      console.log('Error', e);
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
    });

  return;
}

export async function registerRoom(
  name,
  shortDescription,
  categories,
  banner,
  bannerType,
) {
  if (!name)
    return Toast.show({
      text1: 'Please enter the name',
      type: 'error',
      visibilityTime: 3000,
    });

  if (!shortDescription)
    return Toast.show({
      text1: 'Please enter the short description',
      type: 'error',
      visibilityTime: 3000,
    });

  if (!categories)
    return Toast.show({
      text1: 'Please select the category',
      type: 'error',
      visibilityTime: 3000,
    });
  if (!banner)
    return Toast.show({
      text1: 'Please select the banner image',
      type: 'error',
      visibilityTime: 3000,
    });

  const params = new FormData();
  params.append('name', name);
  params.append('shortDescription', shortDescription);
  categories.map((item, index) =>
    params.append(`category_id[${index}]`, item.id),
  );
  if (bannerType)
    params.append('banner', {
      uri: banner,
      name: `Banner${Date.now()}.${bannerType.slice(
        bannerType.lastIndexOf('/') + 1,
      )}`,
      type: bannerType,
    });
  loaderStart();
  fetch(Common.baseURL + 'room', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.getState()?.reducer.token}`,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    body: params,
  })
    .then(response => response.json())
    .then(data => {
      loaderStop();
      Toast.show({
        text1: data?.message,
        type: 'success',
        visibilityTime: 5000,
      });
      if (data?.status == 1) {
        NavService.goBack();
      }
    })
    .catch(e => {
      loaderStop();
      console.log('Error', e);
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
    });

  return;
}

export async function getRoomDetails(id) {
  const response = await getApi(`room/${id}`, false);
  if (response?.status == 1) return response?.data;
  return [];
}

export async function updateRoomStatus(room_id, status) {
  const params = {
    room_id,
    status: status,
  };

  const response = await postApi(`room/status`, params, false, false);
  if (response?.status == 1) return response?.data;
  return [];
}
