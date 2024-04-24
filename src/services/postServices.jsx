export const getAllPosts = () => {
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

export const postNewPhilosopher = (newPost) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    }
    return fetch("http://localhost:8088/philosophers", postOptions).then((res) => res.json())
}

 