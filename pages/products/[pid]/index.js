import { useRouter } from 'next/router'

const ProductDetail = () => {
  const router = useRouter()
  const pid = router.query['pid']

  return (
    <>
      <p>Product Detail { pid }</p>
    </>
  )
}

export default ProductDetail