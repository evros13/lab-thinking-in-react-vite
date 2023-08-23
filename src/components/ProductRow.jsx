
function ProductRow(props) {

    const productName = props.product.name
    const {price, inStock} = props.product

    const rowStyle = {
        color: inStock ? "black" : "red",
      };

      
    return (

        <tr style={rowStyle}>
            <td>{productName}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow