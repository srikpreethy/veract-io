import Link from "next/link";
import '../styles/styles.css';
import Casestudies from "./casestudies";
export default function Navbar(){

return(
    <div>
    <div className="bg-white ">
        <nav >
        <div className="p-4 border-2  rounded-lg border-primary   bg-primary " >
            <div className="flex flex-row justify-between flex-nowrap items-center justify-center"> 
                <div className="flex  items-center justify-center gap-80">
                    <div><label className="flex text-6xl italic font-medium mainName">Veract</label></div> 
                    <div className="quote"><a href="#">Fix an appointment</a></div>   
                </div>
                <div className="flex flex-end quote md:gap-10">
                <a href="about" className="home">Home</a>
                <a href="services" className="services">Services</a>    
                <div><a href="caseStudies" className="caseStudies">Case Studies</a></div>
                <div><a href="testimonials" className="testimonials">Testimonials</a></div>    
                </div>
            </div>
        </div>
        </nav>
        <div className="mainPage flex items-center">
            <div>
                <div className="flex flex-row gap-96">
                    <div className="flex flex-col md:gap-8 ">
                        <div className="text-6xl pl-8">Mobile and Web<br></br>Software applications</div>
                        <div className="text-6xl pl-8"></div>
                    </div>
                    <div className="w-1/5 " ><img src="/merged image.png"></img></div>
                </div>
            </div>    
            <div className="flex clientsLogo md:gap-6 ">
                <img src="/myTrackie.svg"></img>
                <img src="/northern.svg"></img>
                <img src="/maco.svg"></img>
                <img src="/rajdeep.svg"></img>
                <img src="/suyash.svg"></img>
                <img src="/anyo.svg"></img>
            </div>

        </div>
        {/* services ......................................................*/}
        
        <div className=" flex flex-col pt-8 line-with-text">
            <div className="flex items-center justify-center">
            <hr></hr>
            <label className="text-3xl text-black font-semibold">Our <span className="servicesHeading text-3xl font-semibold">Services</span></label>
            <hr></hr>
            </div>
            <div className="flex items-center justify-center pt-212 md:gap-8 ">
                <div className="card1">
                    <div className="card1-overlay flex flex-col md:gap-4 items-center justify-center">
                        <ol>
                            <li className="font-semibold">REACT</li>
                            <li className="font-semibold">NODE JS</li>
                            <li className="font-semibold">FLUTTER</li>
                            <li className="font-semibold">JAVA</li>
                        </ol>
                        <label className="flex border-2 border-white p-2">Know More! </label>
                    </div>
                </div>

                <div className="card2">
                    <div className="card2-overlay flex- flex-col md:gap-4 items-center justify-center">
                        <ol>
                            <li className="font-semibold">FLUTTER</li>
                            <li className="font-semibold">ANIMA</li>
                            <li className="font-semibold">MUNIMA</li>
                        </ol>
                        <label className="flex border-2 border-white p-2">Know More! </label>
                    </div>
                </div>
                <div className="card3">
                <div className="card3-overlay flex- flex-col md:gap-4 items-center justify-center">
                        <ol>
                            <li className="font-semibold">PERSONA</li>
                            <li className="font-semibold">USER FLOWS</li>
                            <li className="font-semibold">JOURNEY MAPS</li>
                            <li className="font-semibold">USABILITY AUDITS</li>
                            <li className="font-semibold">COMPETITIVE AUDIT</li>
                        </ol>
                        <label className="flex border-2 border-white p-2">Know More! </label>
                    </div>
                </div>
                {/* <div className="card4"></div> */}
            </div>
            <div className="ball-container flex flex-row gap-40">
            <div className="ball ball-down ">
                <div className="content">Web Applications</div>
            </div>
            <div className="ball ball-up">
                <div className="content">Mobile Applications</div>
            </div>
            <div className="ball ball-down">
                <div className="content">UX Research and Design</div>
            </div>
        </div>
        <hr className="mb-40"></hr>
        </div>

        {/* case studies ......................................................*/}
        <Casestudies />
    </div>
    </div>

);
}