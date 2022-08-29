const CommentDetail = ({ comment }) => {
  return (
    <div>
      <p>{comment.id} {comment.text}</p>
    </div>
  )
}

export default CommentDetail

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:3000/api/comments`) // your fetch function here
  const data = await response.json()

  const paths = data.map(comment => {
    return {
        params: {
          commentId: `${comment.id}`
        }
      }
    })

  return {
    paths,
    fallback: "blocking"
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const { params } = ctx
  const response = await fetch(`http://localhost:3000/api/comments/${params.commentId}`) // your fetch function here
  const data = await response.json()

  console.log('Generating page for commentId', params.commentId);

  if(!data.id) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      comment: data
    }
  }
}