import './ProductCard.scss';

const ProductCard = () => {
    return(
        <div className="product-card__container">
            <div className="product-card__image">
             <img></img>
            </div>
            <div className="product-card__content"> 
            <h2>Product</h2>
            <p>product description</p>
            </div>
        </div>
    )
}

export default ProductCard;