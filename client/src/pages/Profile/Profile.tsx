import axios, { AxiosError, AxiosResponse } from 'axios';
import React from 'react';

const Profile = () => {
  const [user, setUser] = React.useState<string>('');
  axios
    .get('http://localhost:4000/user', { withCredentials: true })
    .then((res: AxiosResponse) => {
      setUser(res.data.email);
    })
    .catch((err: AxiosError) => {
      console.error(err.message);
    });

  return <div>Current User: {user}</div>;
};

export default Profile;
