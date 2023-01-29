import React, { useEffect } from 'react'
import styles from "./course.module.css"
import Navbar from '../../Home/Navbar'
import Footer from '../../Home/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
const aosinit = () => {
  AOS.init({
    duration: 1000
  });
}

const Details = () => {
  const router = useRouter()
  const { _id } = router.query
  const test = useSelector((state) => state.test);
  const data = test.test.filter((item)=>item._id===_id);


  useEffect(() => {
    setTimeout(() => {
      aosinit()
    }, 30);
  }, [])

  console.log(_id)



  return (
    <div style={{ background: "#8C3B60" }}>
      <Navbar />
      <div className={styles.main}>


        {
          data && data.map((item, i) => <>
            <div className={styles.course_box}>
              <div data-aos="fade-right">
                <div>
                  <Heading>{item.title }</Heading>
                </div>
                <div>
                  <img src="https://cdn.testbook.com/resources/productionimages/555_All_1665002340.png" alt='img' />
                </div>
              </div>

              <div data-aos="fade-left">

                <div>{item.title}</div>
                <div>Questions - {item.question.length}</div>
                <div>Marks - {item.question.length}</div>
                <div>Timing - {item.question.length} Min</div>
                <div>Price -Rs {item.price}/</div>
                <Button size={"lg"} variant='solid' colorScheme={"green"} color="white">Buy Now</Button>
              </div>

            </div>
          </>)
        }

      </div>

      <Footer />
    </div>
  )
}

export default Details