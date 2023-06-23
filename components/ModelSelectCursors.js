import React from 'react'
import styles from '/styles/modelSelectCursor.module.css'
import { motion } from "framer-motion"
import { container, item } from "../components/StyleAnimation"



const ModelSelectCursors = ({ hide }) => {

    const arrayCursors =
        [
            { id: 1, LinkImage: 'https://cur.cursors-4u.net/others/oth-8/oth756.cur' },
            { id: 2, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec318.cur' },
            { id: 3, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec329.cur' },
            { id: 4, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec324.cur' },
            { id: 5, LinkImage: 'https://cur.cursors-4u.net/mechanics/mec-4/mec326.cur' }
        ];


    const applyCursorUserChoose = (id, urlImage) => {

        document.body.style.cursor = `url(${urlImage}), pointer`;
        sessionStorage.setItem("typeCursor", urlImage);

        hide();
    }



    return (
        <motion.div variants={container} initial="hidden" animate="show"
            className={styles.styleModelCursors}>

            <motion.div variants={item} class={styles.titleSelectCurser}>
                <h1>Welcome to the Learn for Programmers Website</h1>
                <h6>Please Select a style Cursor</h6>
            </motion.div>


            <motion.div variants={item} class={styles.choiceCurser} >

                {arrayCursors.map((item) =>
                    <div className={styles.cursorsImage} key={item.id}>
                        <img src={item.LinkImage}
                            onClick={() => applyCursorUserChoose(item.id, item.LinkImage)} />
                    </div>
                )}
            </motion.div >

        </motion.div>
    )
}

export default ModelSelectCursors