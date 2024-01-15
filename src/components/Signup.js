import { useState } from 'react'
import Footer from './Footer'
import './Signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Signup() {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/auth/register', {username, email, password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='log-background'>
                <div className='log-box'>
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='username'>
                                <strong>Name</strong>
                            </label>
                            <input
                              type='text'
                              placeholder='Enter Username'
                              autoComplete='off'
                              name='username'
                              className='inputbox'
                              onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='email'>
                                <strong>Email</strong>
                            </label>
                            <input
                              type='text'
                              placeholder='Enter email'
                              autoComplete='off'
                              name='email'
                              className='inputbox'
                              onChange={(e) => setEmail(e.target.value)}
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
                        <button type='submit' className='btn-register'>
                            Register
                        </button>
                        </form>
                        <p><a href='/login'>Already have an account?</a></p>
                        {/* <div className='btn-login'>
                            <Link to='login'>
                            Login
                            </Link>
                        </div> */}
                </div>
            </div>
        </div>
    );
}
export default Signup