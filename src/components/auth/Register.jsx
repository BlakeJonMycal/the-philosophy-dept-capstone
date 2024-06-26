import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser, getUserByEmail } from "../../services/userService"
import "./Login.css"

export const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    createUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "philosophy_user",
          JSON.stringify({
            id: createdUser.id,
          })
        )

        navigate("/myLibrary")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewUser()
      }
    })
  }

  const updateUser = (evt) => {
    const copy = { ...user }
    copy[evt.target.id] = evt.target.value
    setUser(copy)
  }

  return (<>
    <main className="container-login"style={{ textAlign: "center" }}>
    <img className="register-logo" src="/images/capstone logo.png" alt="logo" />
    <div className="subheading">an annotated digital library</div>

      <section className="edit-register-page">
      <form className="edit-register-change" onSubmit={handleRegister}>

        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Enter your name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="userName"
              className="form-control"
              placeholder="Enter your user name"
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
      </section>
    </main>
  </>
  )
}
