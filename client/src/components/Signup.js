import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function SignUp({updateUser}) {
    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        username: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {first_name, last_name, username, email, password } = formData

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            first_name,
            last_name,
            username,
            email,
            password
        }

        fetch(`/users`, {
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
                }
            })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
        <div className='headers'>
            <h1>Welcome to your virtual wine cellar! </h1>
            <h1>Sign up now to start saving your wines</h1>
        </div>
        <br></br>
        <br></br>

            <form onSubmit={onSubmit}>
                <h2>Sign Up!</h2>

                <label>
                    First Name
                </label>
                <input type='text' name='first_name' value={first_name} onChange={handleChange} />
<br></br>
                <label>
                    Last Name
                </label>
                <input type='text' name='last_name' value={last_name} onChange={handleChange} />
<br></br>

                <label>
                    UserName
                </label>
                <input type='text' name='username' value={username} onChange={handleChange} />
<br></br>
                <label>
                    Email
                </label>
                <input type='text' name='email' value={email} onChange={handleChange} />
                <br></br>
                <label>
                    Password
                </label>
                <input type='password' name='password' value={password} onChange={handleChange} />

                <br></br>
                <input type='submit' value='Sign up!' />
            </form>
            {errors ? errors.map(e => <div>{e[0] + ': ' + e[1]}</div>) : null}
        </>
    )
}

export default SignUp