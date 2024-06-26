import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { PostList } from "../components/posts/PostList"
import { PostDetails } from "../components/posts/PostDetails"
import { EditPostDetails } from "../components/forms/EditPostDetails"
import { NewPostForm } from "../components/forms/NewPostForm"
import { useEffect, useState } from "react"
import { Profile } from "../components/user/Profile"
import { EditProfile } from "../components/forms/EditProfile"
import { Footer } from "../components/nav/Footer"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localPhilosophyUser = localStorage.getItem("philosophy_user")
        const philosophyUserObject = JSON.parse(localPhilosophyUser)

        setCurrentUser(philosophyUserObject)
    }, [])

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <NavBar />
                    <Footer />
                    <Outlet />

                </>
            }>
                <Route path="myLibrary">
                    <Route index element={<PostList currentUser={currentUser} />} />
                    <Route path=":myLibraryId" element={<PostDetails />} />
                    <Route path=":myLibraryId/edit" element={<EditPostDetails />} />
                </Route>
                <Route path="addPhilosopher" element={<NewPostForm currentUser={currentUser} />} />
                <Route path="myProfile" element={<Profile currentUser={currentUser} />} />
                <Route path="myProfile/edit" element={<EditProfile currentUser={currentUser} />} />
            </Route>

        </Routes>
    )
}