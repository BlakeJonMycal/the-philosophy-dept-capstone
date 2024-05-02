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


  return (
    <section className="library-page">
      <div className="title">library</div>
      <section className="philosopherlibrary-container">
        {userPosts.length === 0 ? (
          <p>your library is currently empty</p>
        ) : (
          userPosts.map((postObj) => (
            <Link to={`/myLibrary/${postObj.id}`} className="philosopherlibrary-card" key={postObj.id}>
              <Post post={postObj} currentUser={currentUser} />
            </Link>
          ))
        )}
      </section>
    </section>
  )
}