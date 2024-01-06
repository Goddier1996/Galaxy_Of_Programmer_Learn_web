import { Snackbar, Alert } from "@mui/material";


const ShowAlertFavorite = ({ showAlert, setShow, text, type, title,typeAlert }) => {

  return (
    <Snackbar
      open={showAlert}
      autoHideDuration={2000}
      onClose={() => {
        setShow(false);
      }}
    >
      <Alert
        variant="filled"
        severity={typeAlert}
        sx={{ width: "100%", fontSize: "17px", textAlign: "center" }}
      >
        {text ? text : ""} {type ? type : ""}
        <br />
        {title ? title : ""}
      </Alert>
    </Snackbar>
  );
};


export default ShowAlertFavorite;