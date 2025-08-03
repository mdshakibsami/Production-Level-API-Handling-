//1. Concept of iffi : You can use async in useEffect hook using iffi
// Effi
(async () => {
  try {
    setError(false);
    setLoading(true);
    const response = await axios.get(url, {
      signal: controller.signal, // rase step - 2
    });
    setProducts(response.data);
    console.log(response.data);
    setLoading(false);
  } catch (error) {
    // rase step - 3
    if (axios.isCancel(error)) {
      console.log(error.message);
      return;
    }
    setError(true);
    setLoading(false);
    console.log(error);
  }
})();



// 2. You can make a custom hook like ReactQuery with common functionality



// 3. Concept of  debounce
const [search, setSearch] = useState("");
const [debounceSearch, setDebounceSearch] = useState("");

// Debounce Effect (this call the function after the set time)
useEffect(() => {
  const handleDebounce = setTimeout(() => {
    setDebounceSearch(search);
  }, 1000);

  return () => {
    clearTimeout(handleDebounce);
  };
}, [search]);







// 4.  Reduce of Race condition

const controller = new AbortController(); // rase step - 1
const response = await axios.get(url, {
  signal: controller.signal, // rase step - 2
});

// inside the catch
// rase step - 3
if (axios.isCancel(error)) {
  console.log(error.message);
  return;
}

// cleanUp
// rase step - 4
return () => {
  controller.abort();
};
