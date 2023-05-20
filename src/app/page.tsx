import AboutUs from "@/components/AboutUs";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>
          <img src="/images/logo.png" alt="Logo de la marca Recosecha" />
        </h1>
        <h2>Conectado el campo con la ciudad</h2>
      </section>
      <section className="darkSection">
        <h3 className="sectionTitle">¿Qué es recosecha?</h3>
        <p></p>
      </section>
      <section className="lightSection">
        <h3 className="sectionTitle">Próximos eventos</h3>
        <p></p>
      </section>
      <AboutUs />
    </main>
  );
};

export default Home;
