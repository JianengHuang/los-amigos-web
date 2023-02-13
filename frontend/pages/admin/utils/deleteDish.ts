import axios from 'axios';

const deleteDish = (id: string): void => {
  axios.delete(`http://localhost:4000/dish/deletedish/${id}`).then((res) => {
    if (res.status === 200) {
      window.location.reload();
    }
    else {
      alert('Error deleting dish');
    }
  });
};

export default deleteDish;
