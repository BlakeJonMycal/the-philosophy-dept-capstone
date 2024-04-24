import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/postServices"
import "./Post.css"
import { Post } from "./Post"
import { Link } from "react-router-dom"
//PostList component will serve to display all of a user's posts
export const PostList = () => {
  const [allPosts, setAllPosts] = useState([])

  const getAndSetAllPosts = () => {
    getAllPosts().then((postsArray) => {
      setAllPosts(postsArray)
    })
  }
  useEffect(() => {
    getAndSetAllPosts()
  }, [])







  return (<>
    <h2>My Library</h2>
    <section className="philosopherlibrary-container">
      {allPosts.map((postObj) => {
        return (
          <Link to={`/myLibrary/${postObj.id}`} className="philosopherlibrary-card">
            <Post post={postObj} key={postObj.id} />
          </Link>
        )
      })}
    </section>
  </>
  )
}