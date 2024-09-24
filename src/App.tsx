import ProductCard from "./components/ProductCard"
import { productList } from "./data"


const App = () => {
  const renderList=productList.map(product=>
    <ProductCard key={product.id} product={product}/>
  )
  return (
 <main className="container">
  <div className=" rounded-md border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-2 md:gap-4 m-5">
   {renderList}
 </div>
 </main>
  )
}

export default App