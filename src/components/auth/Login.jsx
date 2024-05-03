import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../../services/userService"

export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
      const audio = document.getElementById('bgAudio')
      const handleCanPlay = () => {
        audio.play()
      }
      audio.addEventListener('canplay', handleCanPlay)
      return () => {
        audio.removeEventListener('canplay', handleCanPlay)
      }
    }, [])
  
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
          <form className="form-login" onSubmit={handleLogin}>
            <img className="login-logo" src="/images/capstone logo.png" alt="logo" />
            <div className="motto-login">vita non habet sensum et hoc solum est causa vivere</div>
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
                  enter
                </button>
              </div>
            </fieldset>
          </form>
        <section className="enroll-link">
          <Link to="/register">not a member yet? enroll here</Link>
        </section>
        <div className="audio">
        <audio id="bgAudio" autoPlay>
          <source src="/audio/Richter-daylight.mp3" type="audio/mpeg" />
        </audio>
        </div>
      </main>
    )
  }
  