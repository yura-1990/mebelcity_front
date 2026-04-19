
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CardsContainer } from '@/components/cards/CardsContainer';
import Seo from '@/components/Seo';

const Cards = () => {
  return (
    <>
      <Seo
        title="My Cards - MebelCity"
        description="Create and manage your card collection"
        noindex={true}
      />

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
