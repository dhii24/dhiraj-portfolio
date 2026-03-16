"use client"
import { useState,useEffect } from "react";
import Loader from "@/components/Loader";
import Navbar from "../components/Navbar";
import Hero from "../section/Hero";
import Skills from "../section/Skills";
import Projects from "../section/Projects";
import Contact from "../section/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) return <Loader />

  return (
    <main>

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}