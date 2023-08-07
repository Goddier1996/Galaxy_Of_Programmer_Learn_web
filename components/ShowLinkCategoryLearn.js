import { useEffect, useState } from 'react'
import { Box, Table, TableBody, TableCell, TableRow, Typography, CircularProgress } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { getCategoryIdInfoLinkLearn } from "../api-helpers/frontend/utils"
import UserSaveFavorite from './UserSaveFavorite';
import styles from "../styles/infoCategoryPage.module.css"



const ShowLinkCategoryLearn = ({ idCategoryLink }) => {


    let countLinkInfoCategory = 1;
    const [InfoCategoryLinkLearn, setInfoCategoryLinkLearn] = useState([]);
    const [loadingLink, setLoadingLink] = useState(false);



    useEffect(() => {

        const controller = new AbortController();

        setLoadingLink(true)
        getCategoryIdInfoLinkLearn(idCategoryLink, { signal: controller.signal })
            .then((dataCategory) => setInfoCategoryLinkLearn(dataCategory))
            .then(() => setLoadingLink(false))
            .catch((err) => console.log(err));

        return () => {
            controller.abort()
        }

    }, [idCategoryLink])




    return (

        <>
            <Box>
                {(loadingLink) ?
                    <div style={{ color: "gray", display: "flex", justifyContent: "center" }}>
                        <CircularProgress color="inherit" size={30} />
                        <br /><br /><br />
                    </div>
                    :
                    <div className={styles.line}>
                        <div className={styles.tableStyle}>
                            <Table style={{ width: 600 }} aria-label="simple table">
                                <TableBody>

                                    {((InfoCategoryLinkLearn.length !== 0) ?
                                        <>
                                            {InfoCategoryLinkLearn.map((InfoCategory) => (
                                                <TableRow
                                                    key={InfoCategory._id}
                                                    style={{ borderBottom: "2px solid #b0c4cf" }}
                                                >

                                                    <TableCell style={{ color: "white" }} align="center">
                                                        <p className={styles.fileLinkAboutCategory}>
                                                            {countLinkInfoCategory++}.
                                                        </p>
                                                    </TableCell>

                                                    <TableCell style={{ color: "white" }} align="center">
                                                        <p className={styles.fileLinkAboutCategory}>
                                                            {InfoCategory.titlelinkWebSite}
                                                        </p>
                                                    </TableCell>


                                                    <TableCell style={{ color: "white" }} align="center">
                                                        <div className={styles.fileLinkAboutCategory}>
                                                            <a target="_blank" href={InfoCategory.linkWebSiteLearn} download>
                                                                <LinkIcon />
                                                            </a>
                                                        </div>
                                                    </TableCell>

                                                    <TableCell style={{ color: "white" }} align="center">
                                                        <Typography className={styles.fileLinkAboutCategory}>

                                                            <UserSaveFavorite
                                                                favorite={InfoCategory.linkWebSiteLearn}
                                                                title={InfoCategory.titlelinkWebSite}
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

export default ShowLinkCategoryLearn