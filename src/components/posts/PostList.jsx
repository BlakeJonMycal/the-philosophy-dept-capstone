import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/postServices"
import "./Post.css"
import { Post } from "./Post"
import { Link } from "react-router-dom"


export const PostList = ({ currentUser }) => {
  const [userPosts, setUserPosts] = useState([])

useEffect(() => {
  const getAndSetUserPosts = () => {
    getAllPosts().then(allPosts => {
      const filteredPosts = allPosts.filter(post => post.userId === currentUser.id)
      setUserPosts(filteredPosts)
    })
  }
  getAndSetUserPosts(currentUser)
}, [currentUser])


  return (<>
    <h2>My Library</h2>
    <section className="philosopherlibrary-container">
      {userPosts.map((postObj) => {
        return (
          <Link to={`/myLibrary/${postObj.id}`} className="philosopherlibrary-card" key={postObj.id}>
            <Post post={postObj} currentUser={currentUser} />
          </Link>
        )
      })}
    </section>
  </>
  )
}