import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService"
import "./Profile.css"
import { useNavigate } from "react-router-dom"

export const Profile = ({ currentUser }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        getUserById(currentUser.id).then(userData => {
            const userObj = userData[0]
            setUser(userObj)
        })
    }, [currentUser])

    const handleProfileEditClick = () => {
        navigate(`/myProfile/edit`)
    }
    const navigate = useNavigate()

    return (<section className="profile-container">
        <h2>My Profile</h2>
        <section className="profile">
            <div className="fullname">name: {user?.fullName} </div>
            <div className="username">username: {user?.userName} </div>
            <div className="email">email: {user?.email} </div>
            <div className="postcount">number of philosophers in library: {user?.philosophers?.length} </div>
            </section>

            <button className="button btn-secondary" onClick={handleProfileEditClick}>edit profile</button>


        </section>
    )
}