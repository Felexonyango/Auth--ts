import React from 'react'
import {useGetUserQuery} from '../features/auth/userApi'
const UserJson = () => {
    const {data,isError,isLoading,isSuccess} = useGetUserQuery()
  return (
    <div>
{isLoading  && <div>isLoading.... </div>}
{isError && <div> isError....</div>}
{isSuccess  && (
    <div> 

        {data && data.map((users)=>(
            <div>
<div> {users.name}</div>
<div> {users.username}</div>
</div>
        ))}
    </div>
)}


    </div>
  )
}

export default UserJson