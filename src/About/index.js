import './index.css'
const About = ()=>{
    return(
        <div>
            <section className=''>
            <h1 className='heading'>
                About
            </h1>
            <section className='about'>

                <p>This Podcast is going to feature interesting stories of resilience of women in the tech field and also offer insight on how to work smart and to aim for excellence in the work place.</p>
            </section>
            <section className='main' >
                <h1 className='head'>
                    Coming Soon Episodes !!!
                </h1>
                <section className='text'>
                <p className='upcomimg'><img src='images/play.png' className='play'></img>Life of an African Girl Child</p>
                <p className='upcomimg'><img src='images/play.png' className='play'></img>Life of an African Girl Child</p>
                <p className='upcomimg'><img src='images/play.png' className='play'></img>Life of an African Girl Child</p>
                <p className='upcomimg'><img src='images/play.png' className='play'></img>Life of an African Girl Child</p>
                </section>
            </section>
            </section>
        </div>
    )
}
export default About;