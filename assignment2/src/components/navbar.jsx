import React from  'react'
import'./navbar.css'

const Navbar = () =>{
    return (
        <div id='navbar'>
            <div id='firstbox'>LOCOBAKERY</div>
            <div id='secondbox'>
                <div className='center'>Services</div>
                <div className='center'>Project</div>
                <div className='center'>About</div>
            </div>
            <div id='thirdbox'>Contact</div>
            
        </div>
    )
}

export default Navbar