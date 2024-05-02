import { useEffect, useState } from "react"
import { getAllPosts, getAllSchools } from "../../services/postServices"
import "./Post.css"
import { Post } from "./Post"
import { Link } from "react-router-dom"


export const PostList = ({ currentUser }) => {
  const [userPosts, setUserPosts] = useState([])
  const [schools, setSchools] = useState([])
  const [selectedSchool, setSelectedSchool] = useState("")
  const [errorMessage, setErrorMessage] = useState("")


  useEffect(() => {
    const getAndSetUserPosts = () => {
      getAllPosts().then(allPosts => {
        const filteredPosts = allPosts.filter(post => post.userId === currentUser.id)
        setUserPosts(filteredPosts)
      })
    }
    getAndSetUserPosts(currentUser)
  }, [currentUser])

  useEffect(() => {
    getAllSchools().then((schoolsArray) => {
      setSchools(schoolsArray)
    })
  }, [])

  const handleSchoolFilter = (event) => {
    setSelectedSchool(event.target.value)

  }
const filteredPosts = selectedSchool
? userPosts.filter(post => post.schoolId === parseInt(selectedSchool))
: userPosts

useEffect(() => {
if (filteredPosts.length === 0 && selectedSchool) {
setErrorMessage("there are currently no philosophers in your library who subscribe to this school of thought.")
} else {
  setErrorMessage("")
}
}, [selectedSchool, filteredPosts])

  return (
    <section className="library-page">
      <div className="title">library</div>
        <select className="school-filter" value={selectedSchool} onChange={handleSchoolFilter}>
          <option value=''>all schools of thought</option>
          {schools.map((schoolObj) => (
              <option key={schoolObj.id} value={schoolObj.id}>
                {schoolObj.name}
              </option>
            ))}
        </select>
      {errorMessage && <p>{errorMessage}</p>}
      <section className="philosopherlibrary-container">
        {userPosts.length === 0 ? (
          <p>your library is currently empty</p>
        ) : (
          filteredPosts.map((postObj) => (
            <Link to={`/myLibrary/${postObj.id}`} className="philosopherlibrary-card" key={postObj.id}>
              <Post post={postObj} currentUser={currentUser} />
            </Link>
          ))
        )}
      </section>
    </section>
  )
}