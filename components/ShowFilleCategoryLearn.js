import { useEffect, useState } from 'react'
import { Box, Table, TableBody, TableCell, TableRow, Typography, CircularProgress } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { getCategoryIdInfoFilesLearn } from "../api-helpers/frontend/utils"
import UserSaveFavorite from './UserSaveFavorite';
import styles from "../styles/infoCategoryPage.module.css"


const ShowFilleCategoryLearn = ({ idCategoryFille }) => {


    let countLinkLinkFIleCategory = 1;
    const [InfoCategoryFileLearn, setInfoCategoryFileLearn] = useState([]);
    const [loadingFIle, setLoadingFIle] = useState(false);


    useEffect(() => {

        const controller = new AbortController();

        setLoadingFIle(true)
        getCategoryIdInfoFilesLearn(idCategoryFille, { signal: controller.signal })
            .then((dataCategory) => setInfoCategoryFileLearn(dataCategory))
            .then(() => setLoadingFIle(false))
            .catch((err) => console.log(err));


        return () => {
            controller.abort()
        }

    }, [idCategoryFille])




    return (

        <>
            <Box>
                {(loadingFIle) ?
                    <div style={{ color: "gray", display: "flex", justifyContent: "center" }}>
                        <CircularProgress color="inherit" size={30} />
                        <br /><br /><br />
                    </div>
                    :
                    <div className={styles.line}>
                        <div className={styles.tableStyle}>
                            <Table style={{ width: 600 }} aria-label="simple table">
                                <TableBody>

                                    {((InfoCategoryFileLearn.length !== 0) ?
                                        <>
                                            {InfoCategoryFileLearn.map((InfoCategory) => (
                                                <TableRow
                                                    key={InfoCategory._id}
                                                    style={{ borderBottom: "2px solid #b0c4cf" }}
                                                >

                                                    <TableCell style={{ color: "white" }} align="center">
                                                        <p className={styles.fileLinkAboutCategory}>
                                                            {countLinkLinkFIleCategory++}.
                                                        </p>
                                                    </TableCell>

                                                    <TableCell style={{ color: "white" }} align="center">
                                                        <p className={styles.fileLinkAboutCategory}>
                                                            {InfoCategory.titleFIleLink}
                                                        </p>
                                                    </TableCell>


                                                    <TableCell style={{ color: "white" }} align="center">
                                                        <div className={styles.fileLinkAboutCategory}>
                                                            <a target="_blank" href={InfoCategory.linkFIleLinkLearn} download>
                                                                <FileDownloadIcon />
                                                            </a>
                                                        </div>
                                                    </TableCell>

                                                    <TableCell style={{ color: "white" }} align="center">
                                                        <Typography className={styles.fileLinkAboutCategory}>

                                                            <UserSaveFavorite
                                                                favorite={InfoCategory.linkFIleLinkLearn}
                                                                title={InfoCategory.titleFIleLink}
                                                                type={InfoCategory.type}
                                                                idFavorite={InfoCategory._id}
                                                            />

                                                        </Typography>
                                                    </TableCell>

                                                </TableRow>
                                            ))}
                                        </>
                                        :
                                        <div className={styles.noHaveFiles}>
                                            Not Have Now FIles Sorry
                                        </div>

                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                }
            </Box>
        </>
    )
}

export default ShowFilleCategoryLearn