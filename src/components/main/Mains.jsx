import ProductCardCom from "../card/ProductCardCom";
import FeedBack from "../card/FeedBackCardCom";

export default function Main() {
  return (
    <main className="container mx-auto pl-[35px] flex flex-col items-center">
      <h1 class="text-[50px] text-center">
        <strong>Products</strong>
      </h1>
      <br></br>
      <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto">
        <ProductCardCom />
        <ProductCardCom />
        <ProductCardCom />
        <ProductCardCom />
        <ProductCardCom />
        <ProductCardCom />
      </section>
      <br></br>
      <h1 class="text-[50px] text-center">
        <strong>Feed back</strong>
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
        <FeedBack />
        <FeedBack />
        <FeedBack />
      </section>
    </main>
  );
}
