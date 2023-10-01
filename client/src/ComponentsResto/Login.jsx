import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/resto/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

        const data = await response.json()

		if (data.token) {
			localStorage.setItem('token', data.token)
			//alert('Login successful')
            console.log(data.token)
			window.location.href = '/DashboardCommands'
		} else {
			alert('Please check your username and password')
		}
    }
    return (
        <div>
            <div className="container ">
                <div className="row">
                    <div className='col-12 mx-auto my-auto' style={{ maxWidth: '600px', minHeight: '800px' }}>
                        <h1 className='text-center'>Se Connecter</h1>
                        <form onSubmit={loginUser}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nom</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email" class="form-control"
                                    id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password" class="form-control"
                                    id="exampleInputPassword1" />
                            </div>
                            <center>
                            <input type="submit" class="btn btn-secondary mx-auto" value="Se Connecter" />
                            </center>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login