import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { container, item } from "./StyleAnimation"
import { Box, Tab, Table, TableBody, TableCell, TableRow, Tabs, Typography } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkIcon from '@mui/icons-material/Link';
import { getCategoryIdInfoVideoLearn, getCategoryIdInfoLinkLearn, getCategoryIdInfoFilesLearn } from "../api-helpers/frontend/utils"
import UserSaveFavorite from './UserSaveFavorite';
import styles from "../styles/infoCategoryPage.module.css"
import CircularProgress from '@mui/material/CircularProgress';




const TabsInfoCategory = ({ data }) => {



    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };


    let countLinkInfoCategory = 1;
    let countLinkLinkFIleCategory = 1;


    const [InfoCategoryVideoLearn, setInfoCategoryVideoLearn] = useState([]);
    const [InfoCategoryLinkLearn, setInfoCategoryLinkLearn] = useState([]);
    const [InfoCategoryFileLearn, setInfoCategoryFileLearn] = useState([]);



    useEffect(() => {

        getCategoryIdInfoVideoLearn(data)
            .then((dataCategory) => setInfoCategoryVideoLearn(dataCategory))
            .catch((err) => console.log(err));


        getCategoryIdInfoLinkLearn(data)
            .then((dataCategory) => setInfoCategoryLinkLearn(dataCategory))
            .catch((err) => console.log(err));


        getCategoryIdInfoFilesLearn(data)
            .then((dataCategory) => setInfoCategoryFileLearn(dataCategory))
            .catch((err) => console.log(err));

    }, [])




    return (
        <>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div variants={item}>

                    <Box>
                        <Box>
                            <Tabs
                                className={styles.tabsStyleInfo}
                                value={tabIndex}
                                onChange={handleTabChange}
                                variant="fullWidth"
                                TabIndicatorProps={{ style: { background: '#4f5515' } }}>
                                <Tab label={<div className={styles.tabStyle}>Video </div>} />
                                <Tab label={<div className={styles.tabStyle}>Links </div>} />
                                <Tab label={<div className={styles.tabStyle}>Files Download</div>} />
                            </Tabs>
                        </Box>


                        <Box >

                            {tabIndex === 0 && (
                                <Box>
                                    <div className={styles.line}>

                                        {(InfoCategoryVideoLearn !== 0) ?
                                            <div className={styles.StyleAllShowData}>
                                                {InfoCategoryVideoLearn.map(InfoCategory => (
                                                    <div className={styles.videoInfoCategory} key={InfoCategory._id}>
                                                        {(InfoCategory._id) ?
                                                            <>
                                                                <p>{InfoCategory.titleVideo}
                                                                    <UserSaveFavorite
                                                                        favorite={InfoCategory.video}
                                                                        title={InfoCategory.titleVideo}
                                                                        type={InfoCategory.type}
                                                                        idFavorite={InfoCategory._id}
                                                                    />
                                                                </p>
                                                                <iframe allowFullScreen='allowFullScreen' src={InfoCategory.video} alt="video Learn" />
                                                            </>
                                                            :
                                                            <div style={{ color: "gray" }}>
                                                                <CircularProgress color="inherit" size={25} />
                                                            </div>
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                            :
                                            (InfoCategoryVideoLearn === 0) ?
                                                <div className={styles.noHaveFiles}>
                                                    Not Have Now FIles Sorry
                                                </div>
                                                : ""
                                        }

                                    </div>

                                </Box>
                            )}


                            {tabIndex === 1 && (
                                <Box>
                                    <div className={styles.line}>

                                        {(InfoCategoryLinkLearn.length !== 0) ?
                                            <div className={styles.tableStyle}>
                                                <Table style={{ width: 600 }} aria-label="simple table">
                                                    <TableBody>
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
                                                    </TableBody>
                                                </Table>
                                            </div>
                                            :
                                            (InfoCategoryLinkLearn.length === 0) ?
                                                <div className={styles.noHaveFiles}>
                                                    Not Have Now FIles Sorry
                                                </div>
                                                : ""
                                        }
                                    </div>

                                </Box>
                            )}


                            {tabIndex === 2 && (
                                <Box>
                                    <div className={styles.line}>

                                        {(InfoCategoryFileLearn.length !== 0) ?

                                            <div className={styles.tableStyle}>
                                                <Table style={{ width: 600 }} aria-label="simple table">
                                                    <TableBody>
                                                        {InfoCategoryFileLearn.map((InfoCategory) => (
                                                            <TableRow
                                                                key={InfoCategory._id}
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
                                                    </TableBody>
                                                </Table>
                                            </div>
                                            : (InfoCategoryFileLearn.length === 0) ?
                                                <div className={styles.noHaveFiles}>
                                                    Not Have Now FIles Sorry
                                                </div>
                                                : ""
                                        }
                                    </div>

                                </Box>
                            )}

                        </Box>

                    </Box>

                </motion.div>
            </motion.div>
        </>
    )
}



export default TabsInfoCategory


