import { CircularProgress } from "@mui/material";


const LoadingCircularProgressButton = ({ whereUse }) => {
  return (
    <div>
      {whereUse == "count" ? (
        <CircularProgress color="inherit" size={15} />
      ) : whereUse == "signIn" || whereUse == "register" ? (
        <CircularProgress color="success" />
      ) : (
        ""
      )}
    </div>
  );
};


export default LoadingCircularProgressButton;