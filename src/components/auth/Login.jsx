import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../../services/userService"

export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()
  
    const handleLogin = (e) => {
      e.preventDefault()
  
      getUserByEmail(email).then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0]
          localStorage.setItem(
            "philosophy_user",
            JSON.stringify({
              id: user.id,
            })
          )
  
          navigate("/myLibrary")
        } else {
          window.alert("Invalid login")
        }
      })
    }
  
    return (
      <main className="container-login">
        <section>
          <form className="form-login" onSubmit={handleLogin}>
            <h1>The Philosophy Dept.</h1>
            <h2>an annotated digital library</h2>
            <img src="/images/home-ghost.gif" alt="ghost gif" loop={true} />
            <fieldset>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(evt) => set(evt.target.value)}
                  className="form-control"
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <button className="login-btn btn-info" type="submit">
                  Sign in
                </button>
              </div>
            </fieldset>
          </form>
        </section>
        <section>
          <Link to="/register">Not a member yet? Enroll here</Link>
        </section>
      </main>
    )
  }
  