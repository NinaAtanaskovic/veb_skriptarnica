import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Badge, CardBody } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";


const ProductScreen = ()=> {
    const [product, setProduct] = useState({});
    const { id: productId } = useParams ()
   useEffect(()=> {
    const fetchProduct = async ()=> {
        const { data }= await axios.get(`/api/products/${productId}`);
        setProduct(data);
    }
    fetchProduct();

   }, [productId]);
  
    return <>
    <Link className="btn btn-outline-secondary mb-4 " to='/'>Nazad</Link>
    <Card className="border-0 shadow-sm p-4 mb-4 ">
        <Row className="align-items-center"></Row>
        <Col md={8}>
        <h2 className="mb-2">{product.name}</h2> 
        <Rating value={product.rating} text={`${product.numReviews} recenzija `}></Rating>

        </Col>
        <Col md={4} className="text-md-end mt-3 mt-md-0 ">
        <h3 className="text-primary mb-0 ">{product?.price?.toFixed(2)} RSD</h3> 

        </Col>
    </Card>
    <Row className="gy-4"> 
        
        <Col lg={8}>
        <Card className="border-0 shadow-sm p-4">
            <div className="text-center">
                <Image
                    src={product.image}
                    alt={product.name}
                    fluid 
                    style={{ maxHeight: '500px', objectFit: 'contain'}}
                />

            </div>

        </Card>
        </Col>

        <Col lg={4}>
        <Card className="border-0 shadow-sm">
            <CardBody>
                <h4 className="mb-4 ">Informacije o proizvodu </h4>
                <div className="d-flex justify-content-between mb-3">
                    <span> 
                        Kategorija:
                    </span>
                    {product.category}

                </div>
                <div className="d-flex justify-content-between slign-items-center mb-4">
                    <span>Status:</span>
                    {product.countInStock > 0 ? (
                        <Badge bg='success'>Dostupno</Badge>
                    ): (
                        <Badge bg='danger'>Nije dostupno</Badge>
                    )}
                </div>
                <div className="d-grid">
                    <Button className="add-to-cart-btn" type="button" disabled={product.countInStock===0}
                    >Dodaj u korpu
                    </Button>

                </div>
            </CardBody> 

        </Card>
        
        </Col>
    </Row>
    <Card className="border-0 shadow-sm mt-4">
        <CardBody>
            <h4 className="mb-3">Opis proizvoda</h4>
            <p className="text-muted mb-0">{product.description}</p>
        </CardBody>
    </Card>
    </>
}
export default ProductScreen