import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  background,
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  Img,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getMovie } from "../Redux/action";

import { Link, NavLink } from "react-router-dom";
// import { Alert_T } from "../Auth/Action";

const Home = () => {


  const dispatch = useDispatch();
  const { loading, error, movies } = useSelector((state) => state.MovieState);

   const { sg } = useSelector((state) => state.AuthState);
  // console.log(sg, "sg")
  useEffect(() => {
    dispatch(getMovie());

  }, []);
  // const Change = () => {
  //   dispatch(Alert_T())
  // }

  // useEffect(() => {

  //   if (sg) {
  //     alert("Sikh gaya huu")
  //   } else {
  //     alert("Bhag jao")
  //   }
  // }, [sg])


  if (loading) {
    return (
      <Stack>
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>err</AlertTitle>
        <AlertDescription>
          Something went wrong. Refresh the page.
        </AlertDescription>
      </Alert>
    );
  }
const styles={
 white:{
  backgroundColor:"white",
  color:"black"
 },
 dark:{
  backgroundColor:"black",
  color:"white"
 }

}
const border={
  dark:{
    border:'1px solid white'
  },
  white:{
    border:'1px solid red'
  }
}

  return (
    <Box style={sg?styles.dark:styles.white}>
      <Grid templateColumns='repeat(5, 1fr)' gap={6} p="20px">
        {movies.map((ele) => (
          <GridItem   maxHeight={"500px"} key={ele.id}  >
            <Box style={sg?border.dark:border.white} boxShadow={"2xl"} p="5px" pb="8px" rounded={"10px"}>
              <Img h="300px" w="300px" src={ele.poster_path} alt={ele.title} />
              <Text pt="6px">{ele.title}</Text>
              <Text pt="6px"> Date : {ele.release_date}</Text>

              <Text pt="6px" pb="5px"> Popularity : {ele.popularity}</Text>

              <NavLink p="15px" to={`/movie/${ele.id}`}>   <Button style={sg?styles.white:styles.dark} bg='black' color="white" size='sm'>More details </Button></NavLink>
              {/* <Button onClick={Change}> Change</Button> */}
            </Box></GridItem>

        ))}
      </Grid>
    </Box>
  );
};

export default Home;
