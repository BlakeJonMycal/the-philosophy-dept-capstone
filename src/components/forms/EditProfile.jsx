import { useEffect, useState } from "react"
import "./form.css"
import { useNavigate } from "react-router-dom"
import { getUserById, updateProfile } from "../../services/userService"

export const EditProfile = ({ currentUser }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        getUserById(currentUser.id).then(userData => {
            const userObj = userData[0]
            setUser(userObj)
        })
    }, [currentUser])

    const handleProfileSave = (event) => {
        event.preventDefault()

        const editedProfile = {
            id: user.id,
            fullName: user.fullName,
            userName: user.userName,
            email: user.email

        }
        updateProfile(editedProfile).then(() => {
            navigate(`/myProfile`)
        })
    }
    const navigate = useNavigate()


    return (

        <form>
            <h2 className="form-title">Edit Profile</h2>
            <fieldset id="name-field">
                <label>
                    name:
                </label>
                <input
                    onChange={(event) => {
                        const copy = { ...user }
                        copy.fullName = event.target.value
                        setUser(copy)
                    }}
                    type="text"
                    value={user.fullName ? user.fullName : ''}
                />
            </fieldset>
            <fieldset id="username-field">
                <label>
                    username:
                    </label>

                    <input
                        onChange={(event) => {
                            const copy = { ...user }
                            copy.userName = event.target.value
                            setUser(copy)
                        }}
                        type="text"
                        value={user.userName ? user.userName : ''}
                    />
            </fieldset>
            <fieldset id="email-field">
                <label>
                    email:
                    </label>

                    <input
                        onChange={(event) => {
                            const copy = { ...user }
                            copy.email = event.target.value
                            setUser(copy)
                        }}
                        type="text"
                        value={user.email ? user.email : ''}
                    />
            </fieldset>
            <button className="btn-secondary save-button" onClick={handleProfileSave}>submit changes</button>
        </form>
    )

}