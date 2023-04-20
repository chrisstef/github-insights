import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <span>Created with ❤️ by </span>
        <a
          href="https://github.com/chrisstef"
          target="_blank"
          rel="noopener noreferrer"
        >
          KAI
        </a>
      </div>
    </div>
  );
};

export default Footer;
