import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import CardContainer from "../CardContainer/CardContainer";
import Filters from "../Filters/Filters";
import { Button, useColorMode } from "@chakra-ui/react";
import { getArticles } from "../../redux/actions/actions";
import { getUserId } from "../../redux/actions/actionsUsers";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    dispatch(getArticles());

    if (isAuthenticated) {
      getUserId(user, dispatch);
    }
  }, [isAuthenticated, user, dispatch]);

  return (
    <Box>
      <Box display={"flex"} justifyContent={"rigth"}>
        <Button size={"sm"} borderRadius={"30px"} onClick={toggleColorMode}>
          Mode {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Box>
      <Box>
        <Filters />
      </Box>
      <Box>
        <Carousel />
      </Box>
      <Box>
        <CardContainer />
      </Box>
    </Box>
  );
};

export default Home;

// const Home = () => {

//   const dispatch = useDispatch();
//   const { user, isAuthenticated } = useAuth0();
//   const {id} = useSelector((state) => state.userId);

//   useEffect(() => {
//     dispatch(getArticles());
//     if (isAuthenticated) {
//       async function getData() {
//         await dispatch (getUserId(user));
//         await getAllFavs(id);
//       }
//       getData()
//       console.log(id)
//       const userIdStorage = id;
//       localStorage.setItem("userId", JSON.stringify(userIdStorage));
//     }
//   }, [id]);

//   return (
//     <Box>
//       <Filters />
//       <CardContainer />
//     </Box>
//   );
// };

// export default Home;
