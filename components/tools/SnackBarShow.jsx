import React from 'react'
import { Snackbar, Alert } from '@mui/material';


const SnackBarShow = ({ showAlert, setShowAlert, typeMessage, typeAlert, func }) => {

    return (

        <Snackbar
            open={showAlert}
            autoHideDuration={1500}
            onClose={() => {
                setShowAlert(false)
                {
                    typeAlert === "success" ?
                        window.location.reload(false) :
                        func != null ?
                            func : ""
                }
            }}>
            <Alert
                variant="filled" severity={typeAlert}
                sx={{ width: '100%', fontSize: "17px", textAlign: "center" }}>
                {typeMessage}
            </Alert>
        </Snackbar>
    )
}

export default SnackBarShow;