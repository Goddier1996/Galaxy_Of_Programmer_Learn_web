import { Box, Table, TableBody } from "@mui/material";
import styles from "../infoCategoryPage.module.css";
import ShowFilesAndLinks from "./ShowFilesAndLinks";
import { UseFetch } from "../../../customHook/customHook";
import LoadingCircularProgress from "../../tools/loading/LoadingCircularProgress";


const ShowFilleCategoryLearn = ({ idCategoryFille, howUse }) => {


  let countLinkLinkFIleCategory = 1;

  // custom hook fetch data
  const { data, loading } = UseFetch(howUse, idCategoryFille, "File");


  return (
    <Box>
      {loading ? (
        <LoadingCircularProgress/>
      ) : (
        <div className={styles.line}>
          <div className={styles.tableStyle}>
            <Table style={{ width: 600 }} aria-label="simple table">
              <TableBody>
                {data.length ? (
                  <>
                    {data.map((FileInfo) => (
                      <>
                        {howUse == "info" ? (
                          <ShowFilesAndLinks
                            key={FileInfo._id}
                            data={FileInfo}
                            count={countLinkLinkFIleCategory++}
                            typeShow={"file"}
                            title={FileInfo.titleFIleLink}
                            link={FileInfo.linkFIleLinkLearn}
                            use={howUse}
                          />
                        ) : howUse == "user" ? (
                            <ShowFilesAndLinks
                            key={FileInfo._id}
                            data={FileInfo}
                            count={countLinkLinkFIleCategory++}
                            typeShow={"file"}
                            title={FileInfo.title}
                            link={FileInfo.favorite}
                            use={howUse}
                          />
                        ) : (
                          ""
                        )}
                      </>
                    ))}
                  </>
                ) : (
                  <div className={styles.noHaveFiles}>
                    Not Have Now FIles Sorry
                  </div>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </Box>
  );
};


export default ShowFilleCategoryLearn;