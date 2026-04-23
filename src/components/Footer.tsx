import { companyName } from "../data";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {year} {companyName}. Alla rättigheter förbehållna.
        </p>
        <p>Org.nr: 556123-4567</p>
      </div>
    </footer>
  );
}

export default Footer;
