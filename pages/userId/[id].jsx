import { profileId } from "../../api-helpers/frontend/utils";
import FavoritesUserId from "../../components/profileUser/FavoritesUserId";


// here load user id profile
const UserProfileId = ({ detailsUser }) => {
  return (
    <>
          <FavoritesUserId data={detailsUser}/>
    </>
  );
};

export default UserProfileId;



export const getServerSideProps = async ({ params }) => {

  const res = await profileId(params.id);

  return {
    props: { detailsUser: res },
  };
};