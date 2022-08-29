import { useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([])

  async function loadComments(e) {
    const response = await fetch('/api/comments')
    const data = await response.json();
    setComments(data);
  }

  return (
    <>
      <button onClick={loadComments}>Load Comments</button>
      { comments.map(item =>
        <p key={item.id}>
          { item.text }
        </p>
      )}
    </>
  )
}

export default CommentsPage