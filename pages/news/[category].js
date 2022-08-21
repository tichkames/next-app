const ArticleListByCategory = ({ articles }) => {
  return (
    <div>
      {
        articles.map(
          a => <div key={a.id}>
          <h3>{a.id} {a.title} {a.category}</h3>
        </div>
        )
      }
    </div>
  )
}

export default ArticleListByCategory

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const { params, req, res, query } = ctx;
  const { category } = params;

  console.log(query)
  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', ['name=tich']);

  const response = await fetch(`http://localhost:4000/news?category=${category}`);  // your fetch function here
  const data = await response.json();

  console.log(data)
  return {
    props: {
      articles: data
    }
  }
}