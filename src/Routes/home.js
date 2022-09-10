import React from 'react';
import homePic from '../homepic.png'


function Home(){
    return (
        <div>
            <h1 className='vip'>
                VIP.
            </h1>
            <p className='viptext'>
                Your one stop solution to verifying and picking an influencer to promote your brand.
            </p>
            <img className='homepic' src={homePic}/>
        </div>
    )
}

export default Home;