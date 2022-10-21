import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../Auth/Action";
const Login = () => {
  const [userDetails, setUserDeatils] = useState({ email: "", password: "" });

const dispatch=useDispatch();
const { token,sg } = useSelector((state) => state.AuthState);
console.log(token, "kuch kuch hota hai")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDeatils({ ...userDetails, [name]: value });
  };

  const handleClick = () => {
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token !== undefined) {
          dispatch(setAuth(res.token));
        } else {
          alert("Something went wrong. please refresh.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { email, password } = userDetails;

   if (token) return <Navigate to="/" />;
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
    <Box h="100vh" style={sg?styles.dark:styles.white}> 
    <Container pt="50px" >
      <Stack style={sg?styles.dark:styles.white} maxW={400} spacing={1} border="1px solid silver" p="10px 20px" boxShadow='xs' rounded='2xl' bg='white' h="100%"  display="flex" alignItems={"center"}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </FormControl>
        <FormControl>
          <Button display="block" m="auto" bg="Green" onClick={handleClick}>
            Login
          </Button>
        </FormControl>
      </Stack>
    </Container></Box>
  );
};

export default Login;
