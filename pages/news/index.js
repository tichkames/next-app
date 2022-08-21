const NewsArticlesList = ({ articles }) => {
  return (
    <>
      {
        articles.map(
          a => <div key={a.id}>
          <h2>{a.id} {a.title} {a.category}</h2>
        </div>
        )
      }
    </>
  )
}

export default NewsArticlesList

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const response = await fetch('http://localhost:4000/news'); // your fetch function here
  const data = await response.json();

  return {
    props: {
      articles: data,
    }
  }
}