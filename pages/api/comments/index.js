import { comments } from '../../../data/comments'

export default function handler(req, res) {
  if(req.method === 'GET') {
    return res.status(200).json(comments);

  } else if(req.method === 'POST') {

    if(req.body.comment){
      const text = req.body.comment
      const newComment = {
        id: Date.now(),
        text
      }
      comments.push(newComment);
      return res.status(201).json(newComment)
    }

    return res.status(400).json('error')
  }
}