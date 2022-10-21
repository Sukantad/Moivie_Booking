import React, { useEffect } from "react";
import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { MovieDisplay } from "../ReduxBooking/Action";

const Booking = () => {
  const { sg } = useSelector((state) => state.AuthState);
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.BookingState)
  console.log(data, "le lo")
  useEffect(() => {
    dispatch(MovieDisplay());
    // MovieDisplay();
  }, []);

  const cancelFun = (id) => {
    fetch(`http://localhost:8080/moviesBooked/${id}`,
      {
        method: "Delete",

      })
      .then((res) => {
        dispatch(MovieDisplay());
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
  return <Box h="100vh" style={sg?styles.dark:styles.white}>

    <TableContainer >
      <Table variant='simple' textAlign={'center'}>

        <Thead>
          <Tr>
            <Td>Id</Td>
            <Td>Poster</Td>
            <Td> TITLE</Td>
            <Td >Cancel Booking</Td>
          </Tr>
        </Thead>
        <Tbody p="-50px" border={"1px solid red"}>
          {data.map((ele) => (

            <Tr key={ele.id}>
              <Td>
                {ele.id}

              </Td>
              <Td>   <Image w="50px" h="70px" src={ele.poster_path} alt={ele.title} /></Td>
              <Td ><Text>{ele.title}</Text></Td>
              <Td>               <Button bg="red" color={"white"} onClick={() => cancelFun(ele.id)}> Cancel Booking</Button>
              </Td>
            </Tr>

          ))}
        </Tbody>

      </Table>
    </TableContainer>

  </Box >;
};

export default Booking;
