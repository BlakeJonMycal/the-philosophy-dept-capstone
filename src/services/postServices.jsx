export const getAllPosts = async () => {
    return fetch(`http://localhost:8088/philosophers`).then((res) => res.json())

}
export const getPhilosopherById = (id) => {
    return fetch(`http://localhost:8088/philosophers?id=${id}&_expand=school&_expand=ranking`).then((res) => res.json())
}

export const getAllSchools = () => {
    return fetch(`http://localhost:8088/schools`).then((res) => res.json())
}
export const getAllRankings = () => {
    return fetch(`http://localhost:8088/rankings`).then((res) => res.json())
}

export const postNewPhilosopher = (newPhilosopher) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPhilosopher),
    }
    return fetch("http://localhost:8088/philosophers", postOptions).then((res) => res.json())
}

 export const deletePhilosopher = (id) => {
    const deleteOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    }
    return fetch(`http://localhost:8088/philosophers/${id}`, deleteOptions).then((res) => res.json())
}
export const updatePhilosopher = (philosopher) => {
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(philosopher)
    }
    return fetch(`http://localhost:8088/philosophers/${philosopher.id}`, putOptions).then((res) => res.json())
}
 