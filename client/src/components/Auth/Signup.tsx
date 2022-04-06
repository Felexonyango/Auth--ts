
import React from 'react'
import {useSignupUserMutation} from '../../features/auth/authApi'
const Signup = () => {
  const [signupUser] = useSignupUserMutation()
  

return (
    <div>Signup</div>
  )
}

export default Signup