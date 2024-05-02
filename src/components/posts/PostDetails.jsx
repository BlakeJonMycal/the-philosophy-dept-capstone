import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deletePhilosopher, getPhilosopherById } from "../../services/postServices"
import "./Post.css"

export const PostDetails = () => {
    const [philosopher, setPhilosopher] = useState({})

    const { myLibraryId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getPhilosopherById(myLibraryId).then((data) => {
            const philosopherObj = data[0]
            setPhilosopher(philosopherObj)
        })
    }, [])

    const handleEditClick = () => {
        navigate(`/myLibrary/${myLibraryId}/edit`)
    }

    const deletePhilosopherFromDatabase = () => {
        deletePhilosopher(philosopher.id).then(() => {
            navigate(`/myLibrary`)
        })
    }


    return <section className="philosopher-page">
        <div className="main-content-details">
            <div className="details-left">
                <header className="philosopher-header-top">
                    <img src={philosopher.image} className="philosopherdetails-image" />
                    <ul className="philosopher-info">
                        <li className="p-name">Name: {philosopher.philosopherName}</li>
                        <li className="p-school">School of Thought: {philosopher.school?.name}</li>
                        <li className="p-rank">Ranking: {philosopher.ranking?.name}</li>
                    </ul>
                </header>
                <h3 className="h3-reading">Reading List: </h3>
                <div className="philosopher-reading-list">
                    {philosopher.books}
                </div>
            </div>

            <div className="details-right">
            <h3 className="h3">Annotations</h3>
                <div className="philosopher-notes">
                    {philosopher.notes}
                </div>
                <div className="detail-buttons">
                    <button className="button btn-secondary" onClick={handleEditClick}>Edit Philosopher</button>
                    <button className="button btn-warning" onClick={deletePhilosopherFromDatabase}>Delete Philosopher</button>
                </div>
            </div>
        </div>
    </section>
}