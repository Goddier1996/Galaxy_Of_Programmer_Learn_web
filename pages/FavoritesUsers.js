import dynamic from 'next/dynamic'

const FavoritesUserId = dynamic(() => import('../components/FavoritesUserId'), {
    ssr: false,
})


function FavoritesUsers() {
  return (
    <>
      <FavoritesUserId />
    </>
  )
}


export default FavoritesUsers