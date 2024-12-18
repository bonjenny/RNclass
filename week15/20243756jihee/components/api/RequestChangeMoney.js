// ./api/RequestChangeMoney.js

import axios from 'axios';

const RequestChangeMoney = async (date) => {
  let response;
  try {
    response = await axios.get('https://www.koreaexim.go.kr/site/program/financial/exchangeJSON', {
      params: {
        authkey: 'qGthvf0sfIu3KdwzXFgwmlnbLZO4BIBQ',
        searchdate: date,
        data: 'AP01',
      },
    });
  } catch (err) {
    console.log(err);
    return false;
  }
  return response;
};

export default RequestChangeMoney;
