import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </React.Fragment>
    );
  }
  
function Header() {
    return (
    <Container>
        <div className='socialMedia'>
            <img src='../assets/Instagram-logo.png' alt='logo-instagram'></img>
            <img src='../assets/facebook-logo.jpg' alt='logo-facebook'></img>
            <img src='../assets/twitter-logo.png' alt='logo-twitter'></img>
        </div>
        <div className='logoWaza'>
            <img src='../assets/waza-logo.png' alt='logo-waza'></img>
        </div>
        <div>
            <h3>708-508-4500</h3>
        </div>
    </Container>
        
    );
}
export default Header;