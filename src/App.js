import React from "react";
import { ToastContainer } from "react-toastify";
import FormPage from "./pages/FormPage";

export default function App() {
  return (
    <>
      <FormPage />
      <ToastContainer autoClose={3000} />
    </>
  );
}
