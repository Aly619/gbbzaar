import React, { useEffect } from 'react'
import '../Profile/Profile.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

import prohero from '../Profile/proheropic.png'
import profilepic from '../../Pages/Profile/profilpic.png'
import location from '../../Pages/Profile/location.png'

import ProfileDetail from '../../Components/ProfileDetails/ProfileDetail'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserArts } from '../../store/actions/artActions'
import { loadUser } from '../../store/actions/userActions'

const Profile = () => {
  const [isLoggedIn, setIsloggedIn] = useState(true)
  const { user,loading } = useSelector(state => state.user)
  const { arts } = useSelector(state => state.userArts)
  // console.log(arts)
  const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(loadUser)
  if(user){

    dispatch(getUserArts(user._id))
    // dispatch(loadUser())
    
  }
 },[dispatch,user])
  return (
    <>
      {
        user ? (
          <>
            <Navbar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />

            <section className="profile-section max-width-1440"style={{marginBottom:'200px'}}>
              <ProfileDetail arts={arts} user={user} loading={loading} proheroimg={prohero} profilepicture={user.profileUrl} profiledetailsheading="GB Art Bazaar" profiledetailspara1="Skill Set" profiledetailspara2="Working place/ company" profiledetailspara3="company link here" profiledetailspara4="Address here" location={location} />

            </section>


            <Footer /></>
        ) : (<><h1>Loading</h1></>)
      }

    </>
  )
}

export default Profile