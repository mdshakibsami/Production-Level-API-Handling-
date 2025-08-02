import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search,setSearch]=useState('')

  useEffect(() => {
    // Effi
    ;(async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(`/api/products?search=${search}`);
        setProducts(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false)
        console.log(error)
      }
    })();
  }, [search]);

  if (error) return <p>Something went wrong!</p>;

  if (loading)
    return <p className="text-2xl font-bold">Page is Loading.......</p>;

  return (
    <>
      <h1>Handle API like a professional</h1>
      <h2 className="text-3xl my-5">Number of Products : {products.length}</h2>
      <input onChange={(e)=>setSearch(e.target.value)} className="my-2 bg-white text-black border-3 rounded-lg w-1/2 py-1 px-2 border-red-500" placeholder="search food item name"></input>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => {
          return (
            <div key={product.id} className="border-1 p-2 rounded-2xl">
              <img className="w-full h-[200px] " src={product.image} alt="" />
              <div className="flex justify-between">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
