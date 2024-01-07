import { Menu, Avatar, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";
import styles from "../../heater/menu.module.css";
import dataOptionsCurser from "./jsonSelectCursor/JsonOptionsCursor.json";


const SelectCurser = ({
  handleOpenSelectCurserHeater,
  ChangeStyleCurserInHeater,
  applyCursorUserChoose,
  setSelectCurserHeater,
  selectCurserHeater,
  handleCloseSelectCurserHeater,
}) => {


  return (
    <>
      <Tooltip title="Select Curser">
        <IconButton onClick={handleOpenSelectCurserHeater} sx={{ p: 0 }}>
          {ChangeStyleCurserInHeater.map((page) => (
            <Avatar
              className={styles.SelectCurserStyleHeater}
              alt="Select Curser"
              src={page.typeStyleCurser}
              style={{ height: "60px", width: "60px" }}
            />
          ))}
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={selectCurserHeater}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(selectCurserHeater)}
        onClose={handleCloseSelectCurserHeater}
      >
        <div className={styles.SelectCursor}>
          <h1>Select Cursor</h1>

          {dataOptionsCurser.arrayCursors.map((item) => (
            <motion.div
              variants={item}
              className={styles.cursorsImage}
              key={item.id}
            >
              <img
                src={item.LinkImage}
                alt={item.LinkImage}
                onClick={() =>
                  applyCursorUserChoose(item.LinkImage, setSelectCurserHeater)
                }
              />
            </motion.div>
          ))}
        </div>
      </Menu>
    </>
  );
};


export default SelectCurser;