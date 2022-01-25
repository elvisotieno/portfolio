import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <section className='s1'>
                <div className='mainContainer'>
                    <div className='greetingsWrapper'>
                        <h1>Hi, I am Elvis CEO DITES LTD</h1>  
                    </div> 
                    <div className='introWrapper'>
                        <div className='navWrapper'>
                            <div className='dot-wrapper'>
                                <div id='dot1' className='browser-wrapper'></div>
                                <div id='dot2' className='browser-wrapper'></div>
                                <div id='dot3' className='browser-wrapper'></div>
                            </div>
                            <div>nav</div>
                        </div>
                        <div className='leftColumn'>
                            Left_col
                        </div>
                        <div className='rightColumn'>
                            Right_col
                        </div>
                    </div>                 
                </div>
            </section>
            <section className='s2'>
                <div className='mainContainer'>
                    Aboutme
                </div>
            </section>
            <section className='s1'>
                <div className='mainContainer'>
                    Portfolio
                </div>
            </section>
            <section className='s2'>
                <div className='mainContainer'>
                    Contact me
                </div>
            </section>
        </div>
    )
}

export default HomePage
