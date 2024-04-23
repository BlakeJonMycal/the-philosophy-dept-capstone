export const getAllPosts = () => {
    return fetch(`http://localhost:8088/philosophers`).then((res) => res.json())

}
export const getPhilosopherById = (id) => {
    return fetch(`http://localhost:8088/philosophers?id=${id}&_expand=school&_expand=user&_expand=ranking`).then((res) => res.json())
}