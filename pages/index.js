import Header from "@/components/Header";
// import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import DemoWS from "@/components/DemoWS";
import Quiz from "@/components/Quiz";
// import Support from "@/components/support";
import Home from "@/components/home";
import Login from "@/components/Login";
import Testimonials from "@/components/Testimonials";

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundImage: `url("images/main_bg.png")`,
        }}
      >
        <Header />
        <Home />
      </div>
      <Login />
      {/* <Featured product={featuredProduct} />       */}
      <NewProducts products={newProducts} />
      <Testimonials/>
      <DemoWS />
      <Quiz />
      {/* <Support /> */}
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "645ca76f61e568bb1f009ba4";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
