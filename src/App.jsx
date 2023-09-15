import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {

  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setCourseData(data))
  }, []);

  return (
    <>
      <h1 className='text-red-500 text-7xl'>Course Registration</h1>
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

    </>
  )
}

export default App
