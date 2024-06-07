import React, { useState } from 'react'
import { useContext } from 'react'
import { context } from '../App'
import { useNavigate } from 'react-router'


const Signin = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const { login, setLogin } = useContext(context)


  function handleLogin(e) {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem("users"))
    console.log(users);

    users.map((user) => {
      if (user.email === email) {
        setName(user.name)
        setLogin(name)
        localStorage.setItem("name",user.name)
      }
    })


    if (users.some(user => user.email === email && user.password === password)) {
      alert("login succesfull");
      navigate('/')
    } else {
      alert("incorrect login");
    }
  }


  return (
    <div>
      <div className="form">
        <h1>Sign In</h1>
        <form action="/" onSubmit={handleLogin}>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required id="email" placeholder='Enter user Email Address' onChange={((e) => setEmail(e.target.value))} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required id="password" placeholder='Enter user Password' onChange={((e) => setPassword(e.target.value))} />
          </div>

          <button>Log In</button>
          <h3>Create new Accout <a href="/signup">Sign up</a></h3>
        </form>
      </div>
    </div>
  )
}

export default Signin
