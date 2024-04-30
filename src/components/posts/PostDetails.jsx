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


    return <section className="philosopher">
        <section className="details-left">
            <section className="details-left-container">
            <header className="philosopher-header-top">
                <img src={philosopher.image} className="philosopherdetails-image" />
                <ul className="philosopher-info">
                    <li>Name: {philosopher.philosopherName}</li>
                    <li>School of Thought: {philosopher.school?.name}</li>
                    <li>Ranking: {philosopher.ranking?.name}</li>
                </ul>
                </header>
                <h3 className="h3-reading">Reading List: </h3>
                <div className="philosopher-reading-list">
                {philosopher.books}</div>
            </section>
        </section>
        
        <section className="details-right">
            <div className="philosopher-notes">
                <h3 className="h3">Annotations</h3>
                {philosopher.notes}
            </div>
            <div className="detail-buttons">
            <button className="button btn-secondary" onClick={handleEditClick}>Edit Philosopher</button>
            <button className="button btn-warning" onClick={deletePhilosopherFromDatabase}>Delete Philosopher</button>
            </div>
        </section>

    </section>
}