import { useEffect, useState } from "react"
import "./form.css"
import { getAllRankings, getAllSchools } from "../../services/postServices"

export const NewPostForm = () => {
    const [newPost, setNewPost] = useState({})
    const [schoolType, setSchoolType] = useState([])
    const [rankingType, setRankingType] = useState([])

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



    return (
        <form>
            <h2 className="form-title">Add a New Philosopher to Your Library</h2>
            <fieldset id="name-field">
                <label>
                    Name:{" "}
                    <input
                        onChange={(event) => {
                            const copy = { ...newPost }
                            copy.name = event.target.value
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












        </form>








    )


}