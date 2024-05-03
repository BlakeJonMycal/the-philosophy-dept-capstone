import { useEffect, useState } from "react"
import { getAllRankings, getAllSchools, getPhilosopherById, updatePhilosopher } from "../../services/postServices"
import { useNavigate, useParams } from "react-router-dom"
import "./Edit.css"

export const EditPostDetails = () => {

    const [philosopher, setPhilosopher] = useState({})
    const [schoolType, setSchoolType] = useState([])
    const [rankingType, setRankingType] = useState([])



    const { myLibraryId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getPhilosopherById(myLibraryId).then((data) => {
            const philosopherObj = data[0]
            setPhilosopher(philosopherObj)
        })
    }, [])


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

        const editedPhilosopher = {
            id: philosopher.id,
            userId: philosopher.userId,
            schoolId: philosopher.schoolId,
            rankingId: philosopher.rankingId,
            philosopherName: philosopher.philosopherName,
            image: philosopher.image,
            books: philosopher.books,
            notes: philosopher.notes
        }
        updatePhilosopher(editedPhilosopher).then(() => {
            navigate(`/myLibrary/${editedPhilosopher.id}`)
        })
    }





    return (<main className="edit-philosopher-page">
        <div className="edit-title">Edit Philosopher</div>

        <form className="edit philosopher-change">

            <section className="left-side">
                <div className="info-left-side">
                <fieldset id="name-field">
                    <label>
                        Name: {""}
                    </label>

                    <input
                        onChange={(event) => {
                            const copy = { ...philosopher }
                            copy.philosopherName = event.target.value
                            setPhilosopher(copy)
                        }}
                        required
                        type="text"
                        value={philosopher.philosopherName ? philosopher.philosopherName : ''}
                    />
                </fieldset>
                <fieldset id="school-field">
                    <label>
                        School of Thought: {""}
                    </label>
                    <select
                    required
                        value={philosopher.schoolId}
                        onChange={(event) => {
                            const copy = { ...philosopher }
                            copy.schoolId = parseInt(event.target.value)
                            setPhilosopher(copy)
                        }}
                    >
                        <option value=''>Select</option>
                        {schoolType.map((schoolObj) => {
                            return (
                                <option key={schoolObj.id} value={schoolObj.id}>
                                    {schoolObj.name}
                                </option>
                            )
                        })}
                    </select>
                </fieldset>
                <fieldset id="ranking-field">
                    <label>
                        Ranking:{" "}
                        <select
                        required
                            value={philosopher.rankingId}
                            onChange={(event) => {
                                const copy = { ...philosopher }
                                copy.rankingId = parseInt(event.target.value)
                                setPhilosopher(copy)
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
                        required
                            type="text"
                            value={philosopher.image ? philosopher.image : ''}
                            onChange={(event) => {
                                const copy = { ...philosopher }
                                copy.image = event.target.value
                                setPhilosopher(copy)
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
                            value={philosopher.books ? philosopher.books : ''}
                            onChange={(event) => {
                                const copy = { ...philosopher }
                                copy.books = event.target.value
                                setPhilosopher(copy)
                            }}
                            type="text"
                            required
                        />
                    </label>
                </fieldset>
                </div>
            </section>
            <section className="right-side">
                <fieldset id="note-field">
                    <label>
                        Annotations:{" "}
                        <textarea className="textarea"
                            rows={20}
                            cols={100}
                            value={philosopher.notes ? philosopher.notes : ''}
                            onChange={(event) => {
                                const copy = { ...philosopher }
                                copy.notes = event.target.value
                                setPhilosopher(copy)
                            }}
                            type="text"
                            required
                        />
                    </label>
                </fieldset>
                <button className="btn-secondary save-button" onClick={handleSave}>
                    Submit
                </button>
            </section>
        </form>
        </main>)
}