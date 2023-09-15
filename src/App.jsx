import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart';

function App() {

  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setCourseData(data))
  }, []);

  return (
    <>
      <h1>Course Registration</h1>
      <div className='container'>
        <div className='card-container'>
          {courseData.map(course => {
            return (
              <Card key={course.name} image={course.image}
                name={course.name}
                description={course.description}
                price={course.price}
                credit={course.credit}
              />
            )
          })
          }
        </div>
        <div className='cart-container'>
          <Cart></Cart>
        </div>
      </div>


    </>
  )
}

export default App
