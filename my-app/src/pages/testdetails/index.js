import React, { useEffect } from 'react'
import styles from "./course.module.css"
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Heading } from '@chakra-ui/react'

const aosinit=()=>{
     AOS.init({
  duration: 1000
});
}

const Details = () => {


  useEffect(() => {
    setTimeout(() => {
      aosinit()
    }, 30);
  }, [])




  return (
    <div style={{background:"#8C3B60"}}>
      <Navbar />
      <div className={styles.main}>


        <div className={styles.course_box}>
          <div data-aos="fade-right">
            <div>
               <Heading>title</Heading>
            </div>
             <div>
          <img src="https://cdn.testbook.com/resources/productionimages/555_All_1665002340.png" alt='img'/>
        </div>
          </div>
          
        <div data-aos="fade-left">
        
         <div>desc</div>
         <div>questions</div>
         <div>marks</div>
         <div>timing</div>
         <div>price</div>
         <Button size={"lg"}  variant='solid' colorScheme={"green"} color="white">Buy Now</Button>
        </div>

        </div>

      </div>

    <Footer />
    </div>
  )
}

export default Details