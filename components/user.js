import React from 'react'

const User = (props) => {
  return (
    <>
      <li>
        <p>{ props.user.name }</p>
      </li>
    </>
  )
}

export default User