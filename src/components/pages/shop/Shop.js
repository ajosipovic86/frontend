const Shop = () => {
const  [products, setProducts] = useState([]);
useEffect(
        () => {
         fetch('https://https://dummyjson.com/products')
         .then(response => response.json())
         .then(data => setProducts(data))
         }, []
         );


    return(
        <></>
    )
}


    

   