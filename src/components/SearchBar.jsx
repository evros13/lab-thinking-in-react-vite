import { Divider } from "antd";
import { useState } from "react";

function SearchBar(props) {

    const [searchInput, setSearchInput] = useState("");

    function submitSearch(event) {
        event.preventDefault()
        setSearchInput(event.target.value) 

        props.searchForProduct(event.target.value)
       
    }



    return (
        <Divider>
            <input placeholder="Search" value={searchInput} onChange={(event) => submitSearch(event)}/>
        </Divider>
    )
}

export default SearchBar