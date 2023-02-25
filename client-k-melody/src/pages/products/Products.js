import ProductCard from "../../components/cards/ProductCard";
import './Products.scss';

export default function Products(){

    return(
        <div className="products__container">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    )
}