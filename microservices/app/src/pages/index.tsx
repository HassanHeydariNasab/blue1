import type { NextPage } from "next";
import { Counter, Layout } from "../bundles/UIAppBundle/components";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Counter />
    </Layout>
  );
};

export default Home;
