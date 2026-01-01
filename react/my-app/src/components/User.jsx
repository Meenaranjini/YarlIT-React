import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Users() {
    const [users, setUsers] = useState([]);
    const [totalusers, setTotaluser] = useState();
    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => setUsers(data.users));
    }, []);
    const handlerdelete = (id) => {
        const filterUser = users.filter((user) => {
            return (user.id !== id);
        });
        setUsers(filterUser);
        setTotaluser(filterUser.length);
    }
    return (
        <div>
            <h2>User List</h2>
            <table border={2}>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Profile</th>
                    <th>Age</th>
                    <th>Show</th>
                    <th>Delete</th>
                </tr>
                {users.map(user => (
                    <tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td> <img src={user.image} width="120" alt="user"/></td>
                        <td>{user.age}</td>
                        <td> <Link to={`/users/${user.id}`}>
                            {user.firstName} {user.lastName}
                        </Link></td>
                        <td><button onClick={() => {
                            handlerdelete(user.id)
                        }}>Delete</button></td>
                    </tr>

                ))}
            </table>
        </div>
    );
}
export default Users;