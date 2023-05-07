import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '/styles/fotter.module.css'



function Fotter() {



    return (

        <>
            <div className={styles.fotrIcon}>

                <MDBFooter className={"text-center text-white fotrIcon"}>

                    <div className='container p-4 pb-0'>
                        <section className='mb-4'>
                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#3b5998', border: "none" }}
                                href='https://www.facebook.com/profile.php?id=100007268836178'
                                role='button'
                            >
                                <MDBIcon fab icon='facebook-f' />
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#ac2bac', border: "none" }}
                                href='https://www.instagram.com/artem_kot96'
                                role='button'
                            >
                                <MDBIcon fab icon='instagram' />
                            </a>

                            <a
                                className='btn btn-primary btn-floating m-1'
                                style={{ backgroundColor: '#0077b5', border: "none" }}
                                href='https://www.linkedin.com/in/artem-kot96'
                                role='button'
                            >
                                <MDBIcon fab icon='linkedin' />
                            </a>

                        </section>
                    </div>

                    <div className={`text-center p-3 ${styles.end}`} >
                        <p>© Create and Style Artem Kot</p>
                    </div>

                </MDBFooter>
            </div>
        </>
    )

}

export default Fotter;