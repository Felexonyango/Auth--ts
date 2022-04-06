
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {useSignupUserMutation} from '../../features/auth/authApi'
const Signup = () => {

  const [signupUser,{data,isError,isSuccess}] = useSignupUserMutation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2:""
   
})

const {name, email, password,password2} = formData
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
 name,
  email, 
 password
}

if(password !== password2){
  alert('Password do not match')
  return
} 

if(name === '' || email === '' || password === '' || password2 === ''){
  alert('Please fill all the fields')
  return
}

dispatch(signupUser(userData));

 
}
return (
    <div>
 <form  className='form' onSubmit={handleSubmit}>
 <div className='form-group'>
 <input type='text'name='name'value={name}placeholder='Enter username'onChange={handleChange}
 />
 </div>
 <div className='form-group'>
  <input type='email'name='email'value={email}placeholder='Enter Email'onChange={handleChange}
 />
 </div>
 <div className='form-group'>
<input  type='password'name='password'value={password}placeholder='Enter Password'onChange={handleChange}
 />
 </div>
 <div className='form-group'>
<input  type='password'name='password2'value={password2}placeholder='confirm password'onChange={handleChange}
 />
 </div>
<button type='submit'>Register</button>

 </form>

    </div>
  )
}

export default Signup