import React, {useState, useEffect} from "react";
import axios from "axios";

const UserList = () => {
const [users, setUser] = useState([]);

useEffect(()=>{
  getUsers();
}, []);

const getUsers = async () => {
  const response = await axios.get('http://localhost:5000/users');
  setUser(response.data);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <table className='table is-striped is-fullwidth'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((users, index) => (
                  <tr key={users.id}>
                  <td>{index+1}</td>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.gender}</td>
                  <td>
                    <button className="button is-small is-info">Edit</button>
                    <button className="button is-small is-danger">Delete</button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList;