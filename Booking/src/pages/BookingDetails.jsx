import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Container,
  Flex,
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

import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const BookingDetails = () => {
  const { sg } = useSelector((state) => state.AuthState);

  const dispatch = useDispatch();
  const { loading, error, movies } = useSelector((state) => state);
  const [data, setData] = useState({});
  const [bookingCheck, setBoockingCheck] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    // dispatch(getMovie());
    MovieDisplay();
    check();
  }, []);
  const MovieDisplay = () => {
    fetch(`http://localhost:8080/movies/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res))

  }
  const check = () => {
    fetch("http://localhost:8080/moviesBooked")
      .then((res) => res.json())
      .then((res) => {
        {
          res.map((ele) => {
            if (ele.id == id) {
              setBoockingCheck(true);
            }

          })
        }
      })
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>ERROR</AlertTitle>
        <AlertDescription>
          Something went wrong. Refresh the page.
        </AlertDescription>
      </Alert>
    );
  }
  const Book = () => {
    console.log(data,"ok")
    fetch("http://localhost:8080/moviesBooked",
      {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      }).then((res)=>{
        check(); 
      })

  }

  const styles={
    white:{
     backgroundColor:"white",
     color:"black"
    },
    dark:{
     backgroundColor:"black",
     color:"white"
    }, d:{
      border:'1px solid green',
      color:"black"
    },
    w:{
      border:'1px solid black'
    }
   
   }
 
  return (
    <Box>
     
   <Flex style={sg?styles.dark:styles.white} pt="20px" justifyContent={'space-around'} p="20px"> 
        <Box key={data.id} border="1px solid gray" p="5px" w="30%">
          <Img w="400px" h="500px" src={data.poster_path} alt={data.title} />
          <Text>{data.title}</Text>
         
        </Box>
        <Box border={'1px solid silver'}   p="15px" bg="silver" w="30%" style={sg?  styles.w && styles.dark :styles.white } >
        <Text>{data.title}</Text>
        <Text>Release date - {data.release_date}</Text>
        <Text>Overview{data.overview}</Text>
        <Box style={sg?styles.dark:styles.white}> 
       {

            bookingCheck ? <Button bg='silver' style={sg?styles.d:styles.w}  mb="10px" > <Link to={'/booking'}> Show Booking Details</Link></Button> : <Button style={sg?styles.d:styles.w} onClick={Book}> <Link > Book Tickets</Link></Button>
          }</Box>
   <br />    <Link to='/'>   <Button bg="#118BBE"> Go to Home Page</Button></Link> 
        </Box>
   </Flex>
     
    </Box>
  );
};

export default BookingDetails;
