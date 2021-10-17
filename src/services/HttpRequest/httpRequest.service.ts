import axios from 'axios';

const httpHandler = axios.create({
  baseURL: 'https://www.mocky.io/v2/'
})

export const api = {
  getData: () => httpHandler.get('/59f08692310000b4130e9f71/'),
}