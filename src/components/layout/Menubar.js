import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css'
import { NavLink } from 'react-router-dom';

class Menubar extends Component{
    clearLocalStorage(){
        localStorage.setItem('doc_id', '')
    }
    render(){
    return(
        <div className='navbar-fixed'>
        <nav className='blue fixed'>
            <div className=" container">
                <a href="/" className="left brand-logo">Blogs</a>
                <ul className="right ">
                    <NavLink to='/createblog'><button className='btn black' onClick={this.clearLocalStorage.bind(this)}>Create Blog</button></NavLink>
                </ul>
            </div>
        </nav>
        </div>
    )
}
}
export default Menubar;