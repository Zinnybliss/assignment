// import './Profile.Css'


const Product = (props) => {
    return(
        <>
<div>
    <img src={props.src} alt={props.altText} style={{ width: '200px', height: 'auto' }}/>
    <p>{props.productName}</p>
    <p>{props.description}</p>
    <p>{props.price}</p>
</div>
        </>
    )
}


export default Product;