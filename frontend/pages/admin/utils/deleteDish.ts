import axios from 'axios';

const deleteDish = (id: string): void => {
  axios.delete(`http://localhost:4000/dish/deletedish/${id}`).then((res) => {
    if (res.status === 200) {
      console.log("Dish deleted")
    }
    else {
      alert('Error deleting dish');
    }
  });
};

export default deleteDish;
