import {Row,Col} from 'react-bootstrap'
import { productsArray } from '../productStore';
import ProductCard from '../components/ProductCard';
import EmptyProductCard from '../components/EmptyProduct';


function Seller(){
    
    return(
        <>
        <h1 align= "center" className='p-3' style={{ color: 'honeydew' }}>Welcome to the store!</h1> 
        {/* On a extra small screen we want 1 column but 3 on a medium one */}
        <Row xs={1} md={3} className="g-4 m-3">
            {productsArray.map((product,idx) => (
                <Col align="center" key= {idx}>
                    <ProductCard product ={product}/>
                </Col>
            ))}
            
        </Row>
        <EmptyProductCard/>
        </>
    )
}
export default Seller;