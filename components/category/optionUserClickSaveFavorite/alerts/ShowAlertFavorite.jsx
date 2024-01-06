import { Snackbar, Alert } from "@mui/material";


const ShowAlertFavorite = ({ showAlert, setShow, text, type }) => {

  return (
    <Snackbar
      open={showAlert}
      autoHideDuration={3000}
      onClose={() => {
        setShow(false);
      }}
    >
      <Alert
        variant="filled"
        severity="success"
        sx={{ width: "100%", fontSize: "17px", textAlign: "center" }}
      >
        {text ? text : null} {type ? text : null}
        <br />
        {title}
      </Alert>
    </Snackbar>
  );
};


export default ShowAlertFavorite;