import Axios from 'axios';
import { useState, useEffect } from 'react';

const Admin = () => {
  const [users, setUsers] = useState<any>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [uid, setUid] = useState<any>(null);

  useEffect(() => {
    Axios.get('http://localhost:4000/getallusers', { withCredentials: true })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  const handleChange = (e: any) => {
    setSelectedUser(e.target.value);
    const matchUid = users.filter((user: any) => user.email === e.target.value);
    setUid(matchUid[0]._id);
  };

  const deleteUser = () => {
    Axios.delete(`http://localhost:4000/deleteuser/${uid}`, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        setUsers(users.filter((user: any) => user._id !== uid));
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <>
      <h1>Admin</h1>
      <select onChange={handleChange} name='deleteuser' id='deleteuser'>
        <option key='0' value='0'>
          ---
        </option>
        {users.map((user: any) => {
          return <option key={user._id}>{user.email}</option>;
        })}
      </select>
      <button onClick={deleteUser}>Delete User</button>
    </>
  );
};

export default Admin;
