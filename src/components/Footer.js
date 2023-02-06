import './Footer.css';

function Footer(props) {
    return (
      <footer>
       <p>&copy; 2023 - Ildiko Dutton</p>
       <h1>{props.title}</h1>
      </footer>
    );
  }

  export default Footer;