import { useState } from 'react'
import { motion } from "framer-motion"
import { container, item } from "../../StyleAnimation"
import { Box, Tab, Tabs } from '@mui/material';
import styles from "../infoCategoryPage.module.css"
import ShowVideoCategoryLearn from '../video/ShowVideoCategoryLearn';
import ShowLinkCategoryLearn from '../links/ShowLinkCategoryLearn';
import ShowFilleCategoryLearn from '../files/ShowFilleCategoryLearn';




const TabsInfoCategory = ({ idCategory }) => {


    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };



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
                                <ShowVideoCategoryLearn idCategoryVideo={idCategory} howUse={"info"} />
                            )}


                            {tabIndex === 1 && (
                                <ShowLinkCategoryLearn idCategoryLink={idCategory} howUse={"info"} />
                            )}


                            {tabIndex === 2 && (
                                <ShowFilleCategoryLearn idCategoryFille={idCategory} howUse={"info"} />
                            )}

                        </Box>
                    </Box>
                </motion.div>
            </motion.div>
        </>
    )
}


export default TabsInfoCategory;