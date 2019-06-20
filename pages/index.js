import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
  </Layout>
);

export default Index;
