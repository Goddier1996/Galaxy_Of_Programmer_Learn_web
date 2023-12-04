import { TableCell, TableRow, Typography } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import styles from "../../../styles/infoCategoryPage.module.css"
import UserSaveFavorite from '../UserSaveFavorite';
import LinkIcon from '@mui/icons-material/Link';


const ShowFilesAndLinks = ({ data, count, typeShow, title, link }) => {

    const { _id, type } = data;


    return (
        <TableRow
            key={_id}
            style={{ borderBottom: "2px solid #b0c4cf" }}
        >

            <TableCell style={{ color: "white" }} align="center">
                <p className={styles.fileLinkAboutCategory}>
                    {count}.
                </p>
            </TableCell>

            <TableCell style={{ color: "white" }} align="center">
                <p className={styles.fileLinkAboutCategory}>
                    {title}
                </p>
            </TableCell>


            <TableCell style={{ color: "white" }} align="center">
                <div className={styles.fileLinkAboutCategory}>
                    <a target="_blank" href={link} >

                        {typeShow == "file" ?
                            <FileDownloadIcon /> :
                            typeShow == "link" ?
                                <LinkIcon /> : ""
                        }
                    </a>
                </div>
            </TableCell>

            <TableCell style={{ color: "white" }} align="center">
                <Typography className={styles.fileLinkAboutCategory}>

                    <UserSaveFavorite
                        favorite={link}
                        title={title}
                        type={type}
                        idFavorite={_id}
                    />

                </Typography>
            </TableCell>

        </TableRow>
    )
}

export default ShowFilesAndLinks;