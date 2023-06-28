import { HStack, Button, Box, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions/actions";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Paginate = ({ articles }) => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.page)
  const handleNext = () => {
    if (articles.next !== null) return dispatch(nextPage(articles));
  };
  const handlePrev = () => {
    if (articles.prev !== null) return dispatch(prevPage(articles));
  };

  return (
    <HStack justifyContent={"center"} py={5}>
      <Button
        onClick={handlePrev}
        value="prev"
        id="prev"
        isDisabled={articles.prev === "null"}
        colorScheme="twitter"
        leftIcon={<MdKeyboardArrowLeft size={20} />}
      >
        Prev
      </Button>
      
      <Box
        display='flex' 
        alignItems='center'
        justifyContent="center"
        bg="transparent"
        h={10}
        w={10}
        background="twitter.500"
        borderRadius={7}
        border="none"
        color="white"
        textAlign='center'
      >
        {page}
      </Box>
      <Button
        onClick={handleNext}
        value="next"
        id="next "
        isDisabled={articles.next === "null"}
        rightIcon={<MdKeyboardArrowRight size={20} />}
        colorScheme="twitter"
      >
        Next
      </Button>
    </HStack>
  );
};

export default Paginate;
