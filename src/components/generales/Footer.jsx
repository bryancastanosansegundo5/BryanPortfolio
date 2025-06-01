const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Derechos de autor &copy; {year} Bryan Castaño San Segundo</p>
    </footer>
  );
};

export default Footer;
