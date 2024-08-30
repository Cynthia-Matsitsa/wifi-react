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
                

             </div> 

    
    )
}
export default LandingPage;
