const Footer = (props) => {
  return (
    <div>
      <h2>This page was created by:</h2> <h1>{props.createdBy}</h1>
    </div>
  );
};

export default Footer;
