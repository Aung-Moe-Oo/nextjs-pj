import Head from "next/head";
import { data } from "../data";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import styles from "../styles/Home.module.css";

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aung</title>
        <meta name="description" content="The best project" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
