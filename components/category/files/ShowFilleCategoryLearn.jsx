import { useEffect, useState } from 'react'
import { Box, Table, TableBody, CircularProgress } from '@mui/material';
import { getCategoryIdInfoFilesLearn } from "../../../api-helpers/frontend/utils"
import styles from "../infoCategoryPage.module.css"
import ShowFilesAndLinks from './ShowFilesAndLinks';
import { favoriteSaveIdUserFIle } from "../../../api-helpers/frontend/utils"


const ShowFilleCategoryLearn = ({ idCategoryFille, howUse }) => {


    let countLinkLinkFIleCategory = 1;
    const [InfoCategoryFileLearn, setInfoCategoryFileLearn] = useState([]);
    const [loadingFIle, setLoadingFIle] = useState(false);


    useEffect(() => {

        const controller = new AbortController();

        setLoadingFIle(true);

        {
            howUse == "user" ?
                favoriteSaveIdUserFIle(idCategoryFille, { signal: controller.signal })
                    .then((data) => setInfoCategoryFileLearn(data))
                    .then(() => setLoadingFIle(false))
                    .catch((err) => console.log(err))
                :

                howUse == "info" ?
                    getCategoryIdInfoFilesLearn(idCategoryFille, { signal: controller.signal })
                        .then((dataCategory) => setInfoCategoryFileLearn(dataCategory))
                        .then(() => setLoadingFIle(false))
                        .catch((err) => console.log(err)) : ""
        }

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
                                            {InfoCategoryFileLearn.map((FileInfo) => (
                                                <>
                                                    {howUse == "info" ?
                                                        <ShowFilesAndLinks
                                                            data={FileInfo}
                                                            count={countLinkLinkFIleCategory++}
                                                            typeShow={"file"}
                                                            title={FileInfo.titleFIleLink}
                                                            link={FileInfo.linkFIleLinkLearn}
                                                            use={howUse}
                                                        />
                                                        :
                                                        howUse == "user" ?
                                                            <ShowFilesAndLinks
                                                                data={FileInfo}
                                                                count={countLinkLinkFIleCategory++}
                                                                typeShow={"file"}
                                                                title={FileInfo.title}
                                                                link={FileInfo.favorite}
                                                                use={howUse}
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

export default ShowFilleCategoryLearn;