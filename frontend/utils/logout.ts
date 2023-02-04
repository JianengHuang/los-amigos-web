import Axios from 'axios';

const logout = () => {
  Axios.post('http://localhost:4000/user/logout', {}, { withCredentials: true })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      alert(err.data);
    });
};

export default logout;
