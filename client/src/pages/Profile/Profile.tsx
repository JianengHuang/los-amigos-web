import axios, { AxiosError, AxiosResponse } from 'axios';
import React from 'react';

const Profile = () => {
  const [message, setMessage] = React.useState<string>('');
  axios
    .get('http://localhost:4000/user', { withCredentials: true })
    .then((res: AxiosResponse) => {
      console.log(JSON.stringify(res.data));
      setMessage(JSON.stringify(res.data));
    })
    .catch((err: AxiosError) => {
      console.error(err.message);
    });

  return <div>{message}</div>;
};

export default Profile;
