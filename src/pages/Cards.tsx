
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CardsContainer } from '@/components/cards/CardsContainer';

const Cards = () => {
  return (
    <>
      <Helmet>
        <title>My Cards - MebelCity</title>
        <meta name="description" content="Create and manage your card collection" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white dark:bg-navy-dark transition-colors duration-300">
        <Navbar />
        <main className="flex-grow py-8">
          <CardsContainer />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Cards;
