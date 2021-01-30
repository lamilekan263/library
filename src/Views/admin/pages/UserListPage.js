import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import Search from '../components/Search';

const UserList = () => {
    const [ users, setUsers] = useState([]);
    const [ loading, setLoading] = useState(false)
    useEffect(() => {

        const fetchUsers = async () => {
            setLoading(true)
            const response = await  Axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
            setLoading(false)

        }
        fetchUsers()
    }, [])
  //  filter 

    return (
      <div className="content-wrapper">
        <div className="container">
          <h1 className="mt-2 text-md">Manage Users</h1>
          <div className="flex flex-row justify-center">
            <Search placeholder='User ID' />
            <Search placeholder='Name'/>
            <Search placeholder ='Email Address' />
          </div>

          <table className="text-left w-full">
            <thead className="bg-green-700 flex text-white w-full">
              <tr className="flex w-full mb-4">
                <th className="px-4 py-2 w-1/4 text-center">User ID</th>
                <th className="px-4 py-2 w-1/4 ">Name</th>
                <th className="px-4 py-2 w-1/4 ">Email Address</th>
                <th className="px-4 py-2 w-1/4 ">Phone</th>
                <th className="px-4 py-2 w-1/4 ">Street Address</th>
              </tr>
            </thead>
            {/* Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! */}
            <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
              {users &&
                users.map((user) => {
                  return (
                    <tr className="flex w-full mb-2">
                      <td className="p-2 w-1/4 text-center">{user.id}</td>
                      <td className="p-2 w-1/4 ">{user.name}</td>
                      <td className="p-2 w-1/4 ">{user.email}</td>
                      <td className="p-2 w-1/4 ">{user.phone}</td>
                      <td className="p-2 w-1/4 ">{user.address.street}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default UserList
