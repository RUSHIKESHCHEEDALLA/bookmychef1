import { useContext } from "react";
import { Cart } from "./Context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SingleProduct = ({prod}) => {
  const {cart, setCart} = useContext(Cart);

  return (
    <div>
      <div className='row' style={{marginTop: '4%', marginLeft: '1.5%', marginRight: '1.5%'}}>
        <div className='col-md-3' style={{marginBottom: '3%'}}>
          <Card style={{ width: '18rem', height: '80vh' }}>
            <Card.Img variant="top" src={prod.image} />
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Text>{prod.description}</Card.Text>
              <Card.Text>{'$'+prod.price}</Card.Text>
              {cart.includes(prod) ? (
                <Button onClick={() => {setCart(cart.filter((c) => c.name !== prod.name))}}>Remove from Cart</Button>
              ) : (
                <Button onClick={() => {setCart([...cart, prod])}}>Add to Cart</Button>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
