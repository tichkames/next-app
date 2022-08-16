import React from 'react'
import User from '../components/user';

const UsersList = ({ users }) => {
  return (
    <div>
      <ul>
        {
        users.map(user =>
          <User key={user.id} user={ user }/>
          )
        }
      </ul>
    </div>
  )
}

export default UsersList

export async function getStaticProps() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);

    return {
      props: {
        users: data
      }
    };
}