import './Product.css'


const Product = (props) => {
    return(
        <>
<div>
    <img src={props.src} alt={props.altText} className="product-image" />
    <p>{props.productName}</p>
    <p>{props.description}</p>
    <p>{props.price}</p>
</div>
        </>
    )
}


export default Product;