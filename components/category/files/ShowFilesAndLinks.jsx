import { TableCell, TableRow, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LinkIcon from "@mui/icons-material/Link";
import styles from "../infoCategoryPage.module.css";
import UserSaveFavorite from "../optionUserClickSaveFavorite/UserSaveFavorite";
import UserDeleteFavorite from "../../profileUser/UserDeleteFavorite";



const ShowFilesAndLinks = ({ data, count, typeShow, title, link, use }) => {

  return (
    <TableRow key={data._id} style={{ borderBottom: "2px solid #b0c4cf" }}>
      <TableCell style={{ color: "white" }} align="center">
        <p className={styles.fileLinkAboutCategory}>{count}.</p>
      </TableCell>

      <TableCell style={{ color: "white" }} align="center">
        <p className={styles.fileLinkAboutCategory}>{title}</p>
      </TableCell>

      <TableCell style={{ color: "white" }} align="center">
        <div className={styles.fileLinkAboutCategory}>
          <a target="_blank" href={link}>
            {typeShow == "file" ? (
              <FileDownloadIcon />
            ) : typeShow == "link" ? (
              <LinkIcon />
            ) : (
              ""
            )}
          </a>
        </div>
      </TableCell>

      <TableCell style={{ color: "white" }} align="center">
        <Typography className={styles.fileLinkAboutCategory}>
          {use == "info" ? (
            <UserSaveFavorite
              favorite={link}
              title={title}
              type={data.type}
              idFavorite={data._id}
            />
          ) : use == "user" ? (
            <UserDeleteFavorite id={data._id} />
          ) : (
            ""
          )}
        </Typography>
      </TableCell>
    </TableRow>
  );
};


export default ShowFilesAndLinks;