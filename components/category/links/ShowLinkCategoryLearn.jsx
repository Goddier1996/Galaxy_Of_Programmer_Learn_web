import { Box, Table, TableBody } from "@mui/material";
import styles from "../infoCategoryPage.module.css";
import ShowFilesAndLinks from "../files/ShowFilesAndLinks";
import { UseFetch } from "../../../customHook/customHook";
import LoadingCircularProgress from "../../tools/loading/LoadingCircularProgress";


const ShowLinkCategoryLearn = ({ idCategoryLink, howUse }) => {


  let countLinkInfoCategory = 1;

  // custom hook fetch data
  const { data, loading } = UseFetch(howUse, idCategoryLink, "Link");


  return (
    <>
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
                    {data.map((linksInfo) => (
                      <>
                        {howUse == "info" ? (
                          <ShowFilesAndLinks
                            key={linksInfo._id}
                            data={linksInfo}
                            count={countLinkInfoCategory++}
                            typeShow={"link"}
                            title={linksInfo.titlelinkWebSite}
                            link={linksInfo.linkWebSiteLearn}
                            use={howUse}
                          />
                        ) : howUse == "user" ? (
                          <ShowFilesAndLinks
                            key={linksInfo._id}
                            data={linksInfo}
                            count={countLinkInfoCategory++}
                            typeShow={"link"}
                            title={linksInfo.title}
                            link={linksInfo.favorite}
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
    </>
    
  );
};


export default ShowLinkCategoryLearn;