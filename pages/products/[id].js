import { useRouter } from 'next/router'

const ProductDetail = () => {
  const router = useRouter()
  const id = router.query['id']

  return (
    <div>Product Detail { id }</div>
  )
}

export default ProductDetail