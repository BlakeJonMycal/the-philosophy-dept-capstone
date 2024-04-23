import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPhilosopherById } from "../../services/postServices"

export const PostDetails = () => {
    const [philosopher, setPhilosopher] = useState({})
    const { myLibraryId } = useParams()

    useEffect(() => {
        getPhilosopherById(myLibraryId).then((data) => {
            const philosopherObj = data[0]
            setPhilosopher(philosopherObj)
        })
    }, [myLibraryId])


    return <section className="philosopher">
<header className="philosopher-header">{philosopher.philosopherName}</header>
        </section>
}