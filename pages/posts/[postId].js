const PostDetail = ({ post }) => {
  return (
    <>
      <h2>{ post.id } { post.title }</h2>
      <p>{ post.body }</p>
    </>
  )
}

export default PostDetail

export async function getStaticProps(context) {
  const { params } = context;
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await resp.json();

  return {
    props: {
      post: data
    }
  }
}