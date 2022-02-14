// utils
import axios from 'utils/axios';

export const companySetup = async (payload) => {
  const response = await axios.post('/company/setup', { ...payload });
  const { data } = response;

  return data;
};
