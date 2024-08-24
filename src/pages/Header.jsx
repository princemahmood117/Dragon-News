import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <Link to='/'> <img  className='mx-auto' src={logo} alt="" /> </Link> 
            <p>Journalism Without Fear or Favour</p>

            {/* dynamic date-time using momentjs */}
            <p className='text-xl'> {moment().format("dddd, Do MMMM, YYYY")} </p>
        </div>
    );
};

export default Header;