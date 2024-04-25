export const Post = ({post, currentUser}) => {
    return (
        <section className="philosopherlibrary-info-card">
                <header className="philosopherlibrary-info">{post.philosopherName}</header>
                <img src={post.image} className="philosopherlibrary-image" />
              </section>
    )
}