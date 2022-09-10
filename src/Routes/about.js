import React from 'react';
import ReactPlayer from 'react-player';



function About(){
    return (
    <div>
        <h1 className='abouttext'>Product Video</h1>
        <div className='about'>

            <ReactPlayer className='vid' url="https://www.youtube.com/watch?v=6Tzi4pKklkA" controls ={true}/>
            
        </div>
        </div>
    )
}


export default About;