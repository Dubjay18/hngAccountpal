import React from "react";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Section from "../components/Section";
import SectionTwo from "../components/SectionTwo";
import Sponsors from "../components/Sponsors";

function Main() {
  return (
    <>
      <main className='min-h-screen overflow-x-hidden'>
        <Layout>
          <img
            src='/banner.png'
            className='w-[100vw]'
            alt='banner'
          />
          <Section />
          <Grid />
          <SectionTwo />
        </Layout>
      </main>
    </>
  );
}

export default Main;
