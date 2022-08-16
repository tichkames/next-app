import { useRouter } from 'next/router'

const Review = () => {
  const router = useRouter()
  const rid = router.query['rid']

  return (
    <>
      <p>Review for Product { rid }</p>
    </>
  )
}

export default Review