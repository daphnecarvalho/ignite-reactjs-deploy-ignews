import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";

import { stripe } from "../services/stripe";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "../styles/home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <main className={styles.mainContainer}>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <div className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            <span className={styles.wave}>👋</span>
            &nbsp;Hey, welcome
          </span>
          <h1>
            News about
            <span className={styles.breakLine}></span> the <span>React</span>{" "}
            world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount}/month</span>
          </p>
          <SubscribeButton />
        </section>

        <Image
          src="/images/avatar.svg"
          alt="Girl coding"
          width="336"
          height="521"
        />
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KJwZCFggkNPuVTZnErVUPbJ", {
    expand: ["product"],
  });

  const product = {
    // this: price.product,
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
