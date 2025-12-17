import React from 'react';
import { Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Text>Made with🔥by the University of Kansas Blockchain Institute</Text>
    </footer>
  );
};

const styles = {
  footer: {
    color: 'dark',
    textAlign: 'right',
    padding: '10px 10px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  },
};

export default Footer;
