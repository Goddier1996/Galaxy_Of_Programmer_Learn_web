import dynamic from 'next/dynamic'
import { CircularProgress } from '@mui/material';


const FavoritesUserId = dynamic(() => import('../components/profileUser/FavoritesUserId'), {
  loading: () => <div style={{ color: "gray", display: "flex", justifyContent: "center", marginBottom: "20%", marginTop: "20%" }}>
    <CircularProgress color="inherit" size={60} />
  </div>,
});



function FavoritesUsers() {
  return (
    <>
      <FavoritesUserId />
    </>
  )
}


export default FavoritesUsers