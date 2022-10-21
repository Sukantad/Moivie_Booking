import React from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "../pages/Booking";
import BookingDetails from "../pages/BookingDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/booking"
        element={
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/movie/:id"
        element={
          <PrivateRoute>
            <BookingDetails />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
