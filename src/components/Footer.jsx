// import LunchDiningIcon from '@mui/icons-material/LunchDining';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LanguageIcon from '@mui/icons-material/Language';

function Footer(){
    return(
        <div className="footer">
            <div className="footer-inner">
                <h1>Logoipsum</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Incidunt consequuntur amet culpa cum itaque neque.</p>
            </div>

            <div className="">
                <ul className="flex">
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>

                {/* <ul id="icons">
            <li><FacebookRoundedIcon/></li>
                <li><InstagramIcon/></li>
                <li><TwitterIcon/></li>
                <li><GitHubIcon/></li>
                <li><LanguageIcon/></li>
            </ul> */}
            </div>        
        </div>
    )
}

export default Footer;