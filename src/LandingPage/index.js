import "./index.css"

const LandingPage = () =>{
    return(
        <div className="Navbar">
            <div className="contains">
            
                 <img src="./image/logo.png" alt="" className="logo"></img>
                 <li>Home</li>
                <li>Video</li>
                <li>Article</li>
                <li>Podcast</li>
                <li>Resume</li>
                 </div>
            <div className="knowledge">
                <div className="Text">
                <p className="skills">Knowledge is power,think fast,
                <br></br>talk smart communication skills</p><b></b>
                <button className="text">Get Started</button>
                </div>
            <div className="image">
                    <img src="./image/multimedia.jpg" alt="" className="power"></img>
                </div>
                </div>
                <div className="footer">
                    <div className="contact">
                        <h1>Contact US</h1>
                        <p>Pixelpioneers@gmail.com</p>
                        <p>Pixelpioneers.com</p>
                        <p></p>
                        </div>
                        <div className="Terms">
                            <h1>Terms and Services</h1>
                            <p>Privacy policy</p>
                            <p>Account security</p>

                        </div>
                        <div className="social">
                            <h1>Social media</h1>
                            <div className="icons">
                            <img src="./image/instagram.png" alt="" className="Icon"></img>
                            <img src="./image/facebook.png" alt="" className="Icon"></img>
                            <img src="./image/twitter.png" alt="" className="Icon"></img>

                            </div>
                            </div>
                          
                          

                          </div>
                            <div>
                                <hr className="hr"></hr>
                            </div>
                      <div>
                       <h1 className='copyright'>copyright@Pixelpioneer2024. All right reserved.</h1>

                       </div>

             </div> 

    
    )
}
export default LandingPage;
