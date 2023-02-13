
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import WineSlide from './WineSlide'


function Login({ updateUser }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { username, password } = formData

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }
        // Logs in user
        fetch(`/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        history.push(`/dashboard/${user.id}`)
                    })
                } else {
                    res.json().then(json => setErrors(json.errors))
                }
            })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
            <div className='login'>
                <h1 className='headers'>Welcome Back To Your Virtual Wine Cellar </h1>
            </div>
            <form onSubmit={onSubmit}>
                <h2>Sign In</h2>
                <label>
                    Username

                </label>
                <br></br>
                <input type='text' name='username' value={username} onChange={handleChange} />
                <br></br>
                <label>
                    Password
                </label>
                <br></br>
                <input type='password' name='password' value={password} onChange={handleChange} />

                <br></br>
                <br></br>
                <input type='submit' value='Log in!' />
            </form>
            {errors ? <div>{errors}</div> : null}

            <WineSlide />
        </>
    )
}

export default Login
