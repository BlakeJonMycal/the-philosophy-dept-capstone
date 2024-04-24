export const Post = ({post}) => {
    return (
        <section className="philosopherlibrary-info-card">
                <header className="philosopherlibrary-info">{post.philosopherName}</header>
                <img src={post.image} className="philosopherlibrary-image" />
              </section>
    )
}