import ApiClient from '@/libs/api-client';

const baseUrl = process.env.VUE_APP_USERS_API;

export default {
  usersList(number= 10) {
    return ApiClient.get(`${ baseUrl }/users?perPage=${number}`);
  }
}