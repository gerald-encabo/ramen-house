import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { 
    FooterContainer, 
    FooterWrapper,
    FooterCompanyLogo,
    FooterReserved,
    FooterSocialMedia
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterCompanyLogo>
                <Link to='/'>Ramen{' '}<span><BsFillHouseDoorFill /></span>{' '}House</Link>
            </FooterCompanyLogo>
            <FooterReserved>
                <p>&#169; { Moment(new Date()).format("YYYY") } All Rights Reserved by Gerald Encabo</p>
            </FooterReserved>
            <FooterSocialMedia className='footer-social-media'>
                <ul>
                    <li>
                        <Link to='https://facebook.com/' aria-label='Facebook'>
                            <FaFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.instagram.com/' aria-label='Instagram'>
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://twitter.com/' aria-label='Twitter'>
                            <FaTwitter />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/' aria-label='Youtube'>
                            <FaYoutube />
                        </Link>
                    </li>
                </ul>
            </FooterSocialMedia>
        </FooterWrapper>
    </FooterContainer>
  )
}
export default Footer