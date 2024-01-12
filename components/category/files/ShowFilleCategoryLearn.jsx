import { useEffect, useState } from "react";
import { Box, Table, TableBody } from "@mui/material";
import styles from "../infoCategoryPage.module.css";
import ShowFilesAndLinks from "./ShowFilesAndLinks";
import { UseFetch } from "../../../customHook/customHook";
import LoadingCircularProgress from "../../tools/loading/LoadingCircularProgress";


const ShowFilleCategoryLearn = ({ idCategoryFille, howUse }) => {


  let countLinkLinkFIleCategory = 1;
  const [InfoCategoryFileLearn, setInfoCategoryFileLearn] = useState({});

  // custom hook fetch data
  const { data, loading, error } = UseFetch(InfoCategoryFileLearn);


  useEffect(() => {

    let opjDataFetch = {};

    switch (howUse) {
      case "user":
        opjDataFetch = {
          typeHowUse: "user",
          id: idCategoryFille,
          typeFile:"File"
        };
        setInfoCategoryFileLearn(opjDataFetch);
        break;

      case "info":
        opjDataFetch = {
          typeHowUse: "info",
          id: idCategoryFille,
          typeFile:"File"
        };
        setInfoCategoryFileLearn(opjDataFetch);
        break;
      
      default:
        console.log("not have any data");
    }

  }, [idCategoryFille,howUse]);



  return (
    <Box>
      {loading ? (
        <LoadingCircularProgress/>
      ) : (
        <div className={styles.line}>
          <div className={styles.tableStyle}>
            <Table style={{ width: 600 }} aria-label="simple table">
              <TableBody>
                {data.length !== 0 ? (
                  <>
                    {data.map((FileInfo) => (
                      <>
                        {howUse == "info" ? (
                          <ShowFilesAndLinks
                            data={FileInfo}
                            count={countLinkLinkFIleCategory++}
                            typeShow={"file"}
                            title={FileInfo.titleFIleLink}
                            link={FileInfo.linkFIleLinkLearn}
                            use={howUse}
                          />
                        ) : howUse == "user" ? (
                          <ShowFilesAndLinks
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