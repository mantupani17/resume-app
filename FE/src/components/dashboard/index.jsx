import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Avatar } from 'antd';
import { Education } from './charts/education';
import { AuthContext } from '../../context';
export const DashBoard = () =>{   
    const isAuthenticated = window.localStorage.getItem('isAuthenticated')
    if (isAuthenticated != 'true') {
        window.location.href = '/sign-in'
    }
    const [details, setDetails] = useState({}) 
    const { user } = useContext(AuthContext)
    useEffect(()=>{
        if (user) {
            setDetails({
                name: `${user?.firstname} ${user?.lastname}`,
                location: user.details[0]?.location,
                qualification: user.details[0]?.highestEdu,
                dob: user.details[0]?.dob,
                about: user.details[0]?.about,
                profileUrl: '',
                details: user.details[0]
            })
        }
    },[user])
    return (
        <>
             <Row className='profile-details' align={'middle'}>
                <Col span={6}>
                    <div className='profile-avatar'>
                        <Avatar size={200} src="https://example.com/avatar.jpg" />
                    </div>
                </Col>
                <Col span={18} className='details'>
                    <div className='profile-name'>
                    {details.name}
                    </div>
                    <div className='profile-location'>
                        {details.location}
                    </div>
                    <div className='profile-education'>
                        {details.qualification}
                    </div>
                    <div className='profile-education'>
                        {details.dob}
                    </div>
                    <div className='profile-about'>
                        {details.about}
                    </div>
                </Col>
            </Row>
            <Education details={details.details} />
        </>
       
    );
} 
