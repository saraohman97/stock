import Hero from "./(components)/hero";
import CategoryDisplay from "./(components)/category-display";
import SaleBillboard from "./(components)/sale-billboard";
import ProductShowcase from "./(components)/product-showcase";

export default function Home() {
  return (
    <div className="mt-20">
      <Hero />
      <CategoryDisplay />
      <SaleBillboard />
      <ProductShowcase />
    </div>
  );
}