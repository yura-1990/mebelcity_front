
import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/lib/i18n/context';
import { toast } from "@/components/ui/sonner";
import logo from '../assets/images/logos/6.qora home pn.png'
import mobileLogoDark from '../assets/images/logos/logo_oq.png'
import { CartDropdown } from './cart/CartDropdown';
import {AnimatePresence, motion} from "framer-motion";
import Animable from "@/components/Animable.tsx";
const MotionLink = motion.create(Link);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {isMobile, isMobileLogo} = useIsMobile();
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const savedState = localStorage.getItem("mobileMenuOpen");
    if (savedState === "true") {
      setIsMobileMenuOpen(true);
    }
  }, [location.pathname]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300 },
    },
    exit: {
      opacity: 0,
      x: 30,
      transition: { duration: 0.2 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    localStorage.setItem("mobileMenuOpen", JSON.stringify(newState));

  };

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.catalog'), href: '/ofisnaya-mebel' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.gallery'), href: '/gallery' },
    // { name: t('nav.contact'), href: '/contact' },
  ];

  const navClasses = cn(
    'fixed w-screen bg-blue-500 backdrop-blur-md shadow-md top-2 rounded-lg py-2 z-50',
  );

  return (
    <nav className={navClasses}>
      <div className="container-fluid mx-auto px-4 gap-3 flex flex-wrap justify-between items-center " >
        <div className="flex items-center">
          <MotionLink
              to="/"
              whileHover={{ scale: 1.10 }}
              transition={{
                type: 'spring',     // spring, tween, inertia
                stiffness: 300,     // how stiff the spring is
                damping: 10,        // how much bounce to dampen
                duration: 0.1       // optional, mostly for tween
              }}
              className="inline-block text-white dark:text-white text-2xl"
          >
            <img src={isMobileLogo ? mobileLogoDark : logo}
                 alt="mebelcity home logo"
                 className="h-10"
                 loading="lazy"
            />
          </MotionLink>
        </div>

        {!isMobile && (
          <ul className="flex items-center space-x-8">
            {navItems.map((item, index) => (
                <Animable index={index} key={index}>
                  <li key={item.name}>
                    <Link
                        to={item.href}
                        className={`text-white hover:text-blue-900 transition-colors ${
                            location.pathname === item.href ? 'font-bold' : 'font-thin'
                        }`}
                    >
                      <span
                          className={`${
                              location.pathname === item.href ? 'underline underline-offset-12' : ''
                          }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                </Animable>

            ))}
          </ul>
        )}

        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <ThemeToggle />
          <CartDropdown />
          {
            isMobile && <Button
                  variant="outline"
                  size="custom"
                  className="bg-transparent backdrop-blur-sm px-2 py-2 hover:text-white text-white border-white/20 hover:bg-white/20 dark:hover:bg-navy-dark/50"
              >
                <a href="tel:+998991832233">
                  <Phone size={18}  />
                </a>
              </Button>
          }

          {
            !isMobile 
              ? <Button
                    className="bg-wood hover:bg-wood-dark text-white mx-auto flex"
                >
                  <a
                      href="tel:+998901832233"
                      className="flex items-center justify-center text-gray-200"
                  >
                    <Phone size={20} className="mr-2 " />
                    <span className="font-medium ">+998 90 183 22 33 </span>
                  </a>
                </Button>
              : ''
          }
          
          
          {isMobile ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-white z-50 dark:text-white bg-transparent"
            >
              {isMobileMenuOpen ? <X className={'dark:text-white text-navy-dark'} size={24} /> : <Menu size={24} />}
            </Button>
          ) : (
            ''
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
            <motion.div
                className="fixed right-[5px] lg:right-[15px] lg:w-[260px] w-[180px] h-screen p-0 m-0 z-10 top-[60px]  lg:top-[90px]"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={containerVariants}
            >
              <div className="mx-auto">
                <motion.ul
                    className="flex w-full flex-col p-0 m-0 space-y-1 items-center"
                    variants={containerVariants}
                >
                  {navItems.map((item) => (
                      <motion.li
                          key={item.name}
                          className={`${location.pathname === item.href ? 'bg-white text-blue-500 shadow-xl' : 'text-white bg-blue-500'} w-full hover:text-white  hover:bg-blue-600  rounded-md py-1`}
                          variants={itemVariants}
                      >
                        <Link
                            to={item.href}
                            className=" w-full text-xl font-medium block text-center"
                            onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                  ))}

                  <motion.li
                      className={`${location.pathname === '/cart' ? 'bg-white text-blue-500 shadow-xl' : 'text-white bg-blue-500'} w-full hover:text-white  hover:bg-blue-600  rounded-md py-1`}
                      variants={itemVariants}
                  >
                    <Link
                        to="/cart"
                        className="w-full text-xl font-medium block text-center"
                        onClick={toggleMobileMenu}
                    >
                      Корзина
                    </Link>
                  </motion.li>

                  <motion.li
                      className="w-full bg-blue-500 hover:bg-blue-600 rounded-md"
                      variants={itemVariants}
                  >
                    <Button className="text-white bg-blue-500 hover:bg-blue-600 mx-auto flex">
                      <a
                          href="tel:+998901832233"
                          className="flex items-center justify-center text-gray-200"
                      >
                        <Phone size={20} className="mr-2" />
                        <span className="font-medium">+998 90 183 22 33</span>
                      </a>
                    </Button>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
