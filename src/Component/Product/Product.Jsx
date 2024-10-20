import './Profile.Css'


const Product = (props) => {
    return(
        <>
<div>
    <img>{props.imageUrl}</img>
    <p>{props.productName}</p>
    <p>{props.description}</p>
    <p>{props.price}</p>
</div>
        </>
    )
}


export default Product;