import styles from './fotter.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Fotter() {


    return (
        <>
            <div className={styles.fotrIcon}>

                <footer className={"text-center text-white fotrIcon"}>

                    <div className='container p-2 pb-0'>
                        <section className='mb-4'>
                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#3b5998' }}
                                href='https://www.facebook.com/profile.php?id=100007268836178'
                                role='button'
                            >
                                <FacebookIcon/>
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#ac2bac' }}
                                href='https://www.instagram.com/artem_kot96'
                                role='button'
                            >
                                <InstagramIcon/>
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#0077b5' }}
                                href='https://www.linkedin.com/in/artem-kot96'
                                role='button'
                            >
                                <LinkedInIcon/>
                            </a>

                        </section>
                    </div>

                    <div className={`text-center p-3 ${styles.end}`} >
                        <p>© Create and Style Artem Kot</p>
                    </div>

                </footer>
            </div>
        </>
    )

}

export default Fotter;