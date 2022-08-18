import { useRouter } from 'next/router'

const PostDetail = ({ post }) => {
  const router = useRouter()

  if(router.isFallback){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h2>{ post.id } { post.title }</h2>
      <p>{ post.body }</p>
    </>
  )
}

export default PostDetail

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await resp.json();

  const paths = data.map(post => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await resp.json();

  console.log('Generating page for', params.postId);

  if(!data.id) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: data
    }
  }
}