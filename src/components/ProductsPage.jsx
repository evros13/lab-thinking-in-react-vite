import "./../App.css"
import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {

    const [products, setProducts] = useState(jsonData);
    const [productsFound, setProductsFound] = useState(jsonData)

    function searchForProduct(str) {

        let searchedProducts;
    
        if (str === "") {
          searchedProducts = productsFound;
        } else {
          searchedProducts = productsFound.filter((product) => {
            return product.name.match(str)
          });
        }
    
        setProducts(searchedProducts)
      }


    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar searchForProduct={searchForProduct}/>
            <ProductTable products={products}/>
        </div>
    );
}

export default ProductsPage