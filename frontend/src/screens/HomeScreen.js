import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
const HomeScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const productList = useSelector((state) => state.productList)

  const { products, error, loading } = productList
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
