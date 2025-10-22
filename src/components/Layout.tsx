import React from 'react';
import styles from '@/styles/Home.module.css';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import NavBar from './NavBar';
import Meta from './Meta';
type Props = {
  children: any;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Meta title={title} />
      <main className={styles.main}>
        <Box w="100vw" h="100vh" display="flex" flexDirection="column">
          <NavBar />
          {children}
          <Footer />
        </Box>
      </main>
    </>
  );
};

export default Layout;
