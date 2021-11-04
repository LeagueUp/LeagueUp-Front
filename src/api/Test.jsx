/* eslint-disable no-unused-vars */
/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import api from './api';

export const testApi = async param =>
  await api({
    url: '/users',
    type: 'get',
  });
