import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [courseData, setCourseData] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addToSelected = (value) => {
    const isExist = selectedCourses.find(course => course.title === value.title)
    if (isExist) {
      toast.error('You have already selected this course!', 
      {position: 'top-center'});
    }

    else {
      setTotalCredit(totalCredit + parseInt(value.credit));
      setSelectedItem(value);
    }
  }

  useEffect(() => {
    if (totalCredit <= 20 && selectedItem) {
      setTotalPrice(totalPrice + parseInt(selectedItem.price) );
      setSelectedCourses(courses => [...courses, selectedItem]);
    }
    else if(selectedItem){
      toast.error('You have exceeded credit limit', 
      {position: 'top-center'});
      setTotalCredit(totalCredit - parseInt(selectedItem.credit));
    }
  }, [selectedItem]);

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
                selectedHandler={addToSelected}
              />
            )
          })
          }
        </div>
        <div className='cart-container'>
          <Cart selectedCourses={selectedCourses}
            totalCredit={totalCredit}
            totalPrice={totalPrice}
            remaining={20-totalCredit}
          />
        </div>
      </div>

      <ToastContainer/>
    </>
  )
}

export default App
