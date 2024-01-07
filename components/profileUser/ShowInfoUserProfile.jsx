import styles from "./css/profileUser.module.css"
import { Button } from '@mui/material';


const ShowInfoUserProfile = ({ hideSignInFun, name, avatarUser, login }) => {


    return (
        <>
            <div className={styles.header}>

                <Button onClick={hideSignInFun}
                    variant="contained"
                    sx={{ bgcolor: 'rgba(255, 0, 0, 0.600)', '&:hover': { bgcolor: 'rgba(255, 0, 0, 0.500)' } }}>
                    X
                </Button>

                <div className={styles.styleTitleRegister} >
                    <h1>Hi {name} Here Your Profile</h1>
                </div>

                <div className={styles.image}></div>
            </div>


            <div className={styles.bodySpaceAvatar}>
                <img
                    src={avatarUser}
                    alt="avatar user profile"
                    width={120}
                    height={120}
                />
            </div>

            <div className={styles.bodySpaceInfoUser}>
                <p>Name : {name}</p>
                <p>Login : {login}</p>
            </div>
        </>
    )
}

export default ShowInfoUserProfile;