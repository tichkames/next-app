import Link from 'next/link'

const PostList = ({ posts }) => {
  return (
    <>
      {
        posts.map(post => {
          return (<div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>{ post.title }</h2>
            </Link>
          </div>
          )
        })
      }
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await resp.json();

  return {
    props: {
      posts: data
    }
  }
}