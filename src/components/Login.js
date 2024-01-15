import './Signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './AuthContext'


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {login} = useAuth()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/auth/login', {username, password})
        .then(result => {
            console.log('Id :', result)
            console.log(result.data.message)
            if(result.data.message == 'Login successful') {
                    navigate('/');
                    localStorage.setItem('islogged','true')
                    localStorage.setItem('role', result.data.user.role)
                    // localStorage.setItem('userID', result.data.user.userId)
                    console.log(localStorage.getItem('islogged'))
                    
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='log-background'>
                <div className='log-box'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='username'>
                                <strong>Nazwa Użytkownika</strong>
                            </label>
                            <input
                              type='text'
                              placeholder='Enter username'
                              autoComplete='off'
                              name='username'
                              className='inputbox'
                              onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='password'>
                                <strong>Password</strong>
                            </label>
                            <input
                              type='password'
                              placeholder='Enter password'
                              autoComplete='off'
                              name='password'
                              className='inputbox'
                              onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className='btn-login'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login