import React from 'react'
import Layout from '../../components/Layout'
import bg from '../../assets/bg.png'
import CourseCard from './CourseCard'

const Courses = () => {

  const courses = [
    {
      "title" : 'Preparation for a successful job interview in Ed-Tech',
      "teacher" : ' Pratishek Das',
      'oldP' : 2000,
      "newP" : 500
    },
    {
      "title" : 'Preparation for a successful job interview in Ed-Tech',
      "teacher" : ' Pratishek Das',
      'oldP' : 2000,
      "newP" : 500
    },
    {
      "title" : 'Preparation for a successful job interview in Ed-Tech',
      "teacher" : ' Pratishek Das',
      'oldP' : 2000,
      "newP" : 500
    },
    {
      "title" : 'Preparation for a successful job interview in Ed-Tech',
      "teacher" : ' Pratishek Das',
      'oldP' : 2000,
      "newP" : 500
    },
    {
      "title" : 'Preparation for a successful job interview in Ed-Tech',
      "teacher" : ' Pratishek Das',
      'oldP' : 2000,
      "newP" : 500
    },
  ]

  return (
    <div>
      <Layout>
        <div className='grid grid-cols-3 sm:grid-cols-1  md:grid-cols-2 gap-10 mx-auto w-[80%] relative top-28 p-10'>
        {courses.map(item=>(
          <CourseCard img={bg} title={item.title} teacher={item.teacher} oldP={item.oldP} newP={item.newP} />
        ))}
        </div>
      </Layout>
    </div>
  )
}

export default Courses
