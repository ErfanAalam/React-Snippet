import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Signup = () => {

    const navigate = useNavigate()

    const [userinfo, setUserInfo] = useState(
        localStorage
      ? localStorage.getItem("users") ===null
        ? []
        : JSON.parse(localStorage.getItem("users"))
      : []
    )
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        userinfo.length >= 0 ? 
            localStorage.setItem("users", JSON.stringify(userinfo))
            : console.log("nothing");
            

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUserInfo(storedUsers);
    }, [name])

    function handleSubmit(e) {
        e.preventDefault()


        let obj = {
            name: name,
            email: email,
            password: password
        }

        if (userinfo.some(user => user.name === name || user.email === email)) {
            alert("User already exists");
            return;
        }

        setUserInfo([...userinfo, obj])

        setName("")
        setEmail("")
        setPassword("")

        alert("Registration Succesfull")
        // navigate("/signin")

        let users = JSON.parse(localStorage.getItem("users")) || []
        console.log(users);
    }

    // localStorage.clear()


    return (
        <>
            <div className="form">
                <h1>Register</h1>
                <form action="/" onSubmit={(e) => handleSubmit(e)}>
                    <div className="name">
                        <label htmlFor="username">Name</label>
                        <input type="text" name="username" id="username" placeholder='Enter user Name' required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder='Enter user Email Address' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Enter user Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button>Register</button>
                    <h3>Already a member? <a href="/signin">login</a></h3>
                </form>
            </div>
        </>
    )
}

export default Signup
