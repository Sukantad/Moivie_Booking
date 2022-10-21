import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert_T } from "../Auth/Action";
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
const links = [
  { path: "/", title: "HOME" },
  { path: "/login", title: "LOGIN" },
  { path: "/booking", title: "BOOKING" },
];


const Navbar = () => {
  const dispatch =useDispatch();
  const { sg } = useSelector((state) => state.AuthState);
  const Change = () => {
    dispatch(Alert_T())
  }

  // useEffect(() => {
  //   if (sg) {
  //     alert("Sikh gaya huu")
  //   } else {
  //     alert("Bhag jao")
  //   }
  // }, [sg])
  return (

    <Flex minWidth='max-content'  bg="blue" color={"white"} alignItems="center" gap="5" p="5px 20px">
      <Box p='2'>
      <Link to={'/'} >  <Heading size='md'>Home</Heading></Link>
      </Box>
      <Spacer />
      <ButtonGroup gap='2' alignItems={'center'}>
        <Box onClick={Change}> {sg?<MdDarkMode size={'30px'}/>:<MdDarkMode color="black" size={'30px'}/>}</Box>
    <Link to={'/booking'} >   <Button colorScheme='black'>Bookings</Button></Link>
   <Link to={'login'}   >   <Button colorScheme='teal'>Log in</Button></Link>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
