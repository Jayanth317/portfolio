import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        
        <ul class="nav nav-tabs nav-fill mynav">
            <li class="nav-item item">
                <Link to='/Home' className='nav-link active' aria-current='page'>Welcome to my homepage</Link>
            </li>
            <li class="nav-item item " >
                <Link to='/Timer' className='nav-link active' >timer</Link>
            </li>
            <li class="nav-item item">
                <Link to='/About' className='nav-link active' >About</Link>
            </li>
            <li class="nav-item item">
                <Link to='/Resume' className='nav-link active' >Resume</Link>
            </li>
            <li class="nav-item item">
                <Link to='/Carousel.tsx' className='nav-link active' >Different login</Link>
            </li>
            <li class="nav-item item">
                <Link to='/Animation.js' className='nav-link active' >Animation</Link>
            </li>
            <li class="nav-item item">
                <Link to='/Stickynotes.js' className='nav-link active' >StickyNote</Link>
            </li>
        </ul>
    );
}
export default Navbar;