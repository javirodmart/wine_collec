import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { name, email, password } = formData

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            name,
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
                        history.push(`/users/${user.id}`)
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
            <form onSubmit={onSubmit}>
                <label>
                    Username
                </label>
                <input type='text' name='name' value={name} onChange={handleChange} />

                <label>
                    Email
                </label>
                <input type='text' name='email' value={email} onChange={handleChange} />

                <label>
                    Password
                </label>
                <input type='password' name='password' value={password} onChange={handleChange} />


                <input type='submit' value='Sign up!' />
            </form>
            {errors ? errors.map(e => <div>{e[0] + ': ' + e[1]}</div>) : null}
        </>
    )
}

export default SignUp