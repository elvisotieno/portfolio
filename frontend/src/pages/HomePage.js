import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <section className='s1'>
                <div className='mainContainer'>
                    <h1>Hi, I am Elvis CEO DITES LTD</h1>
                    <p>This is the place for the static webpage</p>
                    <Link to = '#'>Your Destionation</Link>
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
                    Contactme
                </div>
            </section>
        </div>
    )
}

export default HomePage
