export default function Post({ post }) {
  const {body,title } = post;
  return (
    <div className="card">
      <h2>{ title}</h2>
      <p>{body}</p>
    </div>
  )
};