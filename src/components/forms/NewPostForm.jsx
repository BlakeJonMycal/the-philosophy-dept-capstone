import { useEffect, useState } from "react"
import { getAllRankings, getAllSchools, postNewPhilosopher } from "../../services/postServices"
import { useNavigate } from "react-router-dom"
import "./form.css"

export const NewPostForm = () => {
    const [newPost, setNewPost] = useState({})
    const [schoolType, setSchoolType] = useState([])
    const [rankingType, setRankingType] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getAllSchools().then((schoolsArray) => {
            setSchoolType(schoolsArray)
        })
    }, [])

    useEffect(() => {
        getAllRankings().then((rankingsArray) => {
            setRankingType(rankingsArray)
        })
    }, [])

    const handleSave = (event) => {
        event.preventDefault()
        postNewPhilosopher(newPost).then((philosopherObj) => {
            navigate(`/myLibrary/${philosopherObj.id}`)
        })
    }



    return (
        <form>
            <h2 className="form-title">Add a New Philosopher to Your Library</h2>
            <fieldset id="name-field">
                <label>
                    Name:{" "}
                    <input
                        onChange={(event) => {
                            const copy = { ...newPost }
                            copy.philosopherName = event.target.value
                            setNewPost(copy)
                        }}
                        type="text"
                    />
                </label>
            </fieldset>
            <fieldset id="school-field">
                <label>
                    School of Thought:{" "}
                    <select
                        onChange={(event) => {
                            const copy = { ...newPost }
                            copy.schoolId = parseInt(event.target.value)
                            setNewPost(copy)
                        }}
                    >
                        <option value="">Select</option>
                        {schoolType.map((schoolObj) => {
                            return (
                                <option key={schoolObj.id} value={schoolObj.id}>
                                    {schoolObj.name}
                                </option>
                            )
                        })}
                    </select>
                </label>
            </fieldset>
            <fieldset id="ranking-field">
                <label>
                    Ranking:{" "}
                    <select
                        onChange={(event) => {
                            const copy = { ...newPost }
                            copy.rankingId = parseInt(event.target.value)
                            setNewPost(copy)
                        }}
                    >
                        <option value="">Select</option>
                        {rankingType.map((rankingObj) => {
                            return (
                                <option key={rankingObj.id} value={rankingObj.id}>
                                    {rankingObj.name}
                                </option>
                            )
                        })}
                    </select>
                </label>
            </fieldset>
            <fieldset id="image-field">
                <label>
                    Image URL:{" "}
                    <input
                        type="text"
                        onChange={(event) => {
                            const copy = { ...newPost }
                            copy.image = event.target.value
                            setNewPost(copy)
                        }}
                    />
                </label>
            </fieldset>
            <fieldset id="book-field">
                <label>
                    Reading List:{" "}
                    <textarea
                        rows={3}
                        cols={40}
                        onChange={(event) => {
                            const copy = { ...newPost }
                            copy.books = event.target.value
                            setNewPost(copy)
                        }}
                        type="text"
                    />
                </label>
            </fieldset>
            <fieldset id="note-field">
                <label>
                    Annotations:{" "}
                    <textarea
                        rows={6}
                        cols={100}
                        onChange={(event) => {
                            const copy = { ...newPost }
                            copy.notes = event.target.value
                            setNewPost(copy)
                        }}
                        type="text"
                    />
                </label>
            </fieldset>
            <button className="btn-secondary save-button" onClick={handleSave}>
                Submit
            </button>
        </form>
    )
}