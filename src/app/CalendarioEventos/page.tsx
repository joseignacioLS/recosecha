"use client";

import Calendar from "@/components/Calendar/Calendar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React, { useEffect } from "react";

const CalendarioEventos = () => {
  useEffect(() => {
    document.querySelector("#calendar")?.scrollIntoView();
  }, []);
  return (
    <>
      <Hero />
      <Calendar/>
      <Footer></Footer>
    </>
  );
};

export default CalendarioEventos;
