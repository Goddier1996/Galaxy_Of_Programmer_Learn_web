import { useEffect, useState } from 'react'
import { Box, Table, TableBody, CircularProgress } from '@mui/material';
import { getCategoryIdInfoLinkLearn } from "../../../api-helpers/frontend/utils"
import styles from "../../../styles/infoCategoryPage.module.css"
import ShowFilesAndLinks from '../files/ShowFilesAndLinks';
import { favoriteSaveIdUserLink } from "../../../api-helpers/frontend/utils"



const ShowLinkCategoryLearn = ({ idCategoryLink, howUse }) => {


    let countLinkInfoCategory = 1;
    const [InfoCategoryLinkLearn, setInfoCategoryLinkLearn] = useState([]);
    const [loadingLink, setLoadingLink] = useState(false);



    useEffect(() => {

        const controller = new AbortController();

        setLoadingLink(true)

        {
            howUse == "user" ?
                favoriteSaveIdUserLink(idCategoryLink, { signal: controller.signal })
                    .then((data) => setInfoCategoryLinkLearn(data))
                    .then(() => setLoadingLink(false))
                    .catch((err) => console.log(err))
                :

                howUse == "info" ?
                    getCategoryIdInfoLinkLearn(idCategoryLink, { signal: controller.signal })
                        .then((dataCategory) => setInfoCategoryLinkLearn(dataCategory))
                        .then(() => setLoadingLink(false))
                        .catch((err) => console.log(err)) : ""
        }

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
                                            {InfoCategoryLinkLearn.map((linksInfo) => (

                                                <>
                                                    {howUse == "info" ?
                                                        <ShowFilesAndLinks
                                                            data={linksInfo}
                                                            count={countLinkInfoCategory++}
                                                            typeShow={"link"}
                                                            title={linksInfo.titlelinkWebSite}
                                                            link={linksInfo.linkWebSiteLearn}
                                                        />
                                                        :
                                                        howUse == "user" ?
                                                            <ShowFilesAndLinks
                                                                data={linksInfo}
                                                                count={countLinkInfoCategory++}
                                                                typeShow={"link"}
                                                                title={linksInfo.title}
                                                                link={linksInfo.favorite}
                                                            /> : ""
                                                    }
                                                </>
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