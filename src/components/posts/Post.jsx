export const Post = ({post}) => {
    return (
        <section className="philosopher-card">
                <header className="philosopher-info">{post.philosopherName}</header>
                <img src={post.image} className="philosopher-image" />
              </section>
    )
}