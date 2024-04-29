export const Post = ({post, currentUser}) => {
    return (
        <section className="philosopherlibrary-info-card">
                <img src={post.image} className="philosopherlibrary-image" />
                <header className="philosopherlibrary-info">{post.philosopherName}</header>

              </section>
    )
}