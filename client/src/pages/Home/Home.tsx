import axios, { AxiosResponse, AxiosError } from 'axios';

const Home = () => {
  axios
    .get('http://localhost:4000/user', { withCredentials: true })
    .then((res: AxiosResponse) => {
      console.log('response', res.data);
    })
    .catch((err: AxiosError) => {
      console.error('error', err.message);
    });
  return <div>Home</div>;
};

export default Home;
