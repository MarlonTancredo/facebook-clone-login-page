const Footer = (props) => {
  return (
    <div>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        Original page
      </a>
      <h2>This page was created by:</h2> <h1>{props.createdBy}</h1>
    </div>
  );
};

export default Footer;
