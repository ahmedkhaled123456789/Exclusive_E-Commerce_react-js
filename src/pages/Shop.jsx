import React, { useEffect, useState } from 'react'
import { Container, Row, Col  } from "reactstrap";
import data from '../components/UI/Data';
import ProductCard from '../components/UI/ProductCard';
import '../style/Shop.css'
const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products,setProducts]=useState(data);
  const handleSearch=(e) =>{
    const searchTerm= e.target.value;
    const searchedProduct= products.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) )
  setProducts(searchedProduct) ;
  }
  const handleFilter=(e) =>{
    const filterValue= e.target.value;
    if(filterValue === 'wear'){
      const filteredProducts= products.filter((item) => item.category === 'wear');
      setProducts(filteredProducts)
    }
    
    if(filterValue === 'gaming'){
      const filteredProducts= products.filter((item) => item.category === 'gaming');
      setProducts(filteredProducts)
    }
    
    if(filterValue === 'car'){
      const filteredProducts= products.filter((item) => item.category === 'car');
      setProducts(filteredProducts)
    }
   
      }
  return (
    <section>
<Container > 
        <Row>
          <Col lg="3" md='6' sm='6' xs='6'>
            <div className="filter_widget">
              <select  onChange={handleFilter}>
                <option >Filter by category</option>
                <option value="wear">Wear</option>
                <option value="gaming">Gaming</option>
                <option value="car">Car</option>
                

              </select>
            </div>
          </Col>
          <Col lg="3" md='6'sm='6' xs='6' className="text-end">
          <div className="filter_widget">
              <select >
                <option >sort by</option>
                <option value="ascending">ascending</option>
                <option value="decrnding">decrnding</option>

              </select>
            </div>
          </Col>
          <Col lg="6" md='12'>
<div className="search_box">
  <input type="text" placeholder="search......." onChange={handleSearch} />
  <span>
    <i class="ri-search-line"></i>
  </span>
</div>

          </Col>

        </Row>
      </Container>

      <Container>
          <Row className='mt-5'>
            {products.length === 0 ? (<h1 className="text-center fs-4">no products are found !</h1>) :


           (  
           
            products.map((item,index) => (
            <ProductCard  product={item} key={index}/>)

           ))
            }
            
          </Row>
        </Container>
</section>
  )
}

export default Shop