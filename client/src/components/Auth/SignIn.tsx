
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import {useSigninUserMutation} from '../../features/auth/authApi'
const SignIn = () => {

  const [signIn,{isSuccess}] = useSigninUserMutation()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
   
})

const { email, password} = formData

const navigate=useNavigate()
useEffect(() => {

  if(isSuccess){
      navigate('/')
  }
  
}, [isSuccess, navigate])
  const dispatch =useDispatch()

  const  handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
      
  }))


  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();

const userData = {
  email, 
 password
}

dispatch(signIn(userData));

 
}
return (
    <div>
 <form  className='form' onSubmit={handleSubmit}>

 <div className='form-group'>
  <input type='email'name='email'value={email}placeholder='Enter Email'onChange={handleChange}
 />
 </div>
 <div className='form-group'>
<input  type='password'name='password'value={password}placeholder='Enter Password'onChange={handleChange}
 />
 </div>

<button type='submit'>login</button>

 </form>

    </div>
  )
}

export default SignIn
