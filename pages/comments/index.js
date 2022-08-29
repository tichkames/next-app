import { useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  async function loadComments(e) {
    console.log(e);
    const response = await fetch('/api/comments')
    const data = await response.json();
    setComments(data);
  }

  const submitComment = async (e) => {
    e.preventDefault()
    console.log(e);
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {'Content-Type': 'application/json'}
      });

    const data = await response.json();
    console.log('status', response.status);
    console.log(data);
  }

  const deleteComment = async (id) => {
    console.log('commentId', id)
    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
    });

    const data = await response.json();
    console.log('status', response.status);
    console.log(data);

    loadComments('user triggered')
  }

  return (
    <>
      <form>
        <input type='text' value={comment} onChange={(e) => setComment(e.target.value) } />
        <input type='submit' onClick={submitComment} value='Submit Comment' />
      </form>
      <button onClick={loadComments}>Load Comments</button>
      { comments.map(item =>
        <div key={item.id}>
          <p>{item.id} { item.text }</p>
          <button onClick={ () => deleteComment(item.id) }>Delete Comment</button>
        </div>
      )}
    </>
  )
}

export default CommentsPage