import './home.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
function Home() {
  return (
      <div className="App" style={{margin:'5%'}}>
          <div className="home-left">
            <h2>Hi 👋 I'm</h2> 
              <h1 className="home-name">Satyajit Panda</h1>    
              <h1 className="home-name-bg">Satyajit Panda</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <InstagramIcon className="social-media"/>
              <FacebookIcon className="social-media" />
              <LinkedInIcon  className="social-media"/>
              <TwitterIcon className="social-media"/>
          </div>
          
          <div className="home-right">
          <img src="https://images.unsplash.com/photo-1498798821241-1f327af804fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="home-photo"></img>
          </div>
            
    </div>
  );
}

export default Home;
