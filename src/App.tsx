import "./App.css";
import { FilterableProductTable } from "./components/FilterableProductTable";

function App() {
  const PRODUCTS: Product[] = [
    { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
    {
      category: "Frutas",
      price: "$1",
      stocked: true,
      name: "Fruta del dragón",
    },
    { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
    { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" },
    { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
    { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" },
  ];

  return (
    <>
      <div>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </>
  );
}

export default App;
