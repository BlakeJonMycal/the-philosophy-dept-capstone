export const getAllPosts = () => {
    return fetch(`http://localhost:8088/philosophers`).then((res) => res.json())

}