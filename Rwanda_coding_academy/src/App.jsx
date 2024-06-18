import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programms from './components/Programms/Programms'
import Title from './components/Title/Title'
import Partners from './components/Partners/partners'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/admin/Signup'
import Login from './components/admin/login'
import UpdateUser from './components/admin/UpdateUser'
import CreateUser from './components/admin/CreateUser'
import Users from './components/admin/Users'


function MainLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='containerr'>
        <Title title='Our PROGRAM' subtitle='What We Offer' />
        <Programms />
        <Title title='Our Global Partners' subtitle='Who we cooperate with' />
        <Partners />
        <Title title='TESTIMONIALS' subtitle='What student says' />
        <Testimonials />
        <Title title='contact us' subtitle='Get in Touch' />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/crud' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

