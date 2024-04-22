import { useEffect, useState } from "react"
import { getAllPosts } from "../../services/postServices"
import "./Post.css"
import { Post } from "./Post"
//PostList component will serve to display all of a user's posts
export const PostList = () => {
    const [allPosts, setAllPosts] = useState([])
  
    useEffect(() => {
      getAllPosts().then((postsArray) => {
        setAllPosts(postsArray)
        console.log("all posts set")
      })
  
    }, [])
    
    
    
    
    
    
    
    return <div>
        <h2>My Library</h2>
        <section className="philosopher-container">
          {allPosts.map((postObj) => {
            return (
              <Post post={postObj} key={postObj.id}/>
            )
          })}
        </section>
      </div>

}