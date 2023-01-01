import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* ---- Header ---- */}
      <Header />
      
      <main className="max-w-screen-2xl mx-auto">
        {/* ---- Banner ---- */}
        <Banner />

        {/* ---- Product Feed ---- */}
        <ProductFeed products={products}/>
        {/* <p>{products}</p> */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
