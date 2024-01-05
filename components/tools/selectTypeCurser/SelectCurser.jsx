import { Menu, Avatar, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { motion } from "framer-motion"
import styles from "../../heater/menu.module.css"



const SelectCurser = ({ handleOpenSelectCurserHeater, ChangeStyleCurserInHeater, applyCursorUserChoose, selectCurserHeater, handleCloseSelectCurserHeater }) => {

    const arrayCursors =
        [
            { id: 1, LinkImage: 'https://cur.cursors-4u.net/others/oth-8/oth756.cur' },
            { id: 2, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec318.cur' },
            { id: 3, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec329.cur' },
            { id: 4, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec324.cur' },
            { id: 5, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec326.cur' }
        ];

    return (
        <>
            <Tooltip title="Select Curser" >
                <IconButton onClick={handleOpenSelectCurserHeater} sx={{ p: 0 }}>

                    {ChangeStyleCurserInHeater.map((page) => (

                        <Avatar className={styles.SelectCurserStyleHeater}
                            alt="Select Curser"
                            src={page.typeStyleCurser}
                            style={{ height: "60px", width: "60px" }} />
                    ))}
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={selectCurserHeater}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                open={Boolean(selectCurserHeater)}
                onClose={handleCloseSelectCurserHeater}
            >

                <div className={styles.SelectCursor} >

                    <h1>Select Cursor</h1>

                    {arrayCursors.map((item) =>
                        <motion.div variants={item} className={styles.cursorsImage} key={item.id}>
                            <img src={item.LinkImage} onClick={() => applyCursorUserChoose(item.LinkImage)} />
                        </motion.div>
                    )}
                </div>

            </Menu>
        </>
    )
}

export default SelectCurser;