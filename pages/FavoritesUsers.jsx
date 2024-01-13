import dynamic from 'next/dynamic'
const FavoritesUserId = dynamic(() => import('../components/profileUser/FavoritesUserId'));


function FavoritesUsers() {
  return (
    <>
      <FavoritesUserId />
    </>
  )
}


export default FavoritesUsers;