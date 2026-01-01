import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [totalusers, setTotaluser] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);
      const handlerdelete = (id) => {
        const filterUser = user.filter((user) => {
            return (user.id !== id);
        });
        setUser(filterUser);
        setTotaluser(filterUser.length);
    }
  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <h2>User Details</h2>
      <img src={user.image} width="120" alt="user"/>
      <p><b>Name:</b> {user.firstName} {user.lastName}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <button onClick={() => {
                            handlerdelete(user.id)
                        }}>Delete</button><br/>
      <button onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
}
export default UserDetails;