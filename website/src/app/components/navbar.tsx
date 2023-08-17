import Link from "next/link";
import '../styles/styles.css';
import Casestudies from "./casestudies";
import Testimonials from "./testimonials";
import ContactUs from "./contactUs";
import Contacts from "./contacts";
export default function Navbar(){

return(
    <div>
    <div className="bg-white custom-cursor fontFamily">
        <nav>
        <div className="p-4 border-2  rounded-lg border-primary   bg-primary " >
            <div className="flex flex-row justify-between flex-nowrap items-center justify-center"> 
                <div className="flex  items-center justify-center gap-20">
                    <div><label className="flex text-6xl  font-medium mainName fontFamilyLogo">veract</label></div> 
                    {/* <div><img src="/logo.png"></img></div> */}
                    <div className="quote flex items-center justify-center fontFamilyNav"><a href="#">Fix an appointment</a></div>  
                </div>
                <div className="flex flex-end fontFamilyNav md:gap-10">
                <a href="" className="founder">Founder's desk</a>
                <a href="about" className="home">Home</a>
                <a href="services" className="services">Services</a>    
                <div><a href="caseStudies" className="caseMain">Case Studies</a></div>
                <div><a href="testimonials" className="testMain">Testimonials</a></div>    
                </div>
            </div>
        </div>
        </nav>
        <div className="mainPage flex ">
            <div >
                {/* <label className="text-6xl pl-8">Custom</label> */}
                <div className="flex flex-row gap-x-80">
                    <div className="flex flex-col md:gap-4 ">
                        <div className="text-5xl pl-8 flex flex-col pt-40 mainPart md:gap-2 fontFamily"><div>Custom</div><div>Mobile & Web</div>Software applications</div>
                    </div>
                    {/* <div className="bouncy-castle ">
                    <div className=" ball-shadow ">
                        <div className="ball">Veract</div>
                    </div> */}
                    <div className="flex flex-row md:gap-16">
                    <div className="ballWrapper">
                    <div className="ball flex items-center justify-center fontFamily"><p className=" text-white">Development</p></div>
	                    <div className="ballShadow"></div>			
                    </div>	
                    <div className="ballWrapper1">
	                    <div className="ball1 flex items-center justify-center fontFamily "><p className="text-white">Architechture</p></div>
	                    <div className="ballShadow1"></div>			
                    </div>
                    <div className="ballWrapper2">
                    <div className="ball2 flex items-center justify-center fontFamily "><p className="font-xs text-white">Consulting</p></div>
	                    <div className="ballShadow2"></div>			
                    </div>
                    <div className="ballWrapper3">
                    <div className="ball3 flex items-center justify-center fontFamily"><p className=" text-white">Framework</p></div>
	                    <div className="ballShadow3"></div>			
                    </div>
                    
                    {/* <div className="ballWrapper">
	                    <div className="ball4"></div>
	                    <div className="ballShadow4"> </div>			
                    </div> */}
                    </div>	
                    {/* <div className="w-1/5 " ><img src="/merged image.png"></img></div> */}
                   
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
        <div className="pt-28 p-10 foundersPage ">
             <div className="flex items-center justify-center">
            <hr></hr>
             <label className="text-3xl servicesHeading font-semibold fontFamily">Founder's   <span className="text-black text-3xl font-semibold">desk</span></label>
                <hr></hr>
             </div>
             <div className="flex flex-row items-center justify-center pt-32 md:gap-6 ">
                    <div className="left-column">
                    <div className="w-44 "><img src="founderProfile.jpeg"></img></div>
                    </div>
                    <div className="right-column flex flex-col md:gap-4 w-1/2">
                        <div><label className="w-1/2 firstPara">After my stints with leading software companies,Veract was created out of my love for engineering and using technology to drive efficiency.We hire and develop people who share our passion for engineering.</label></div>
                        <div className="secondPara">At veract you will directly work with passionate engineers who are keen to employ their superpowers to solve your challenges.</div>
                        <div className="thirdPara">I look forward to working with you and showcase our technical problem solving and software skills.</div>
                    </div>
             </div>
        </div>     
        {/* services ......................................................*/}
        
        <div className=" flex flex-col pt-16 servicesMain  ">
            <div className="flex items-center justify-center">
            <hr></hr>
            <label className="text-3xl text-black font-semibold fontFamily">Our <span className="servicesHeading text-3xl font-semibold">Services</span></label>
            <hr></hr>
            </div>
            {/* <div className="flex items-center justify-center pt-32  ">
                <div className="card1">
                    <div className="card1-overlay flex flex-col md:gap-4 items-center justify-center">
                        <ol>
                            <li className="font-semibold">REACT</li>
                            <li className="font-semibold">NODE JS</li>
                            <li className="font-semibold">FLUTTER</li>
                            <li className="font-semibold">JAVA</li>
                        </ol>
                        <label className="flex border-2 border-black p-2">Know More! </label>
                    </div>
                </div>

                <div className="card2">
                    <div className="card2-overlay flex- flex-col md:gap-4 items-center justify-center">
                        <ol>
                            <li className="font-semibold">FLUTTER</li>
                            <li className="font-semibold">ANIMA</li>
                            <li className="font-semibold">MUNIMA</li>
                        </ol>
                        <label className="flex border-2 border-black p-2">Know More! </label>
                    </div>
                </div>
                 <div className="card3">
                    <div className="card3-overlay flex flex-col md:gap-4 items-center justify-center">
                        <ol>
                            <li className="font-semibold">REACT</li>
                            <li className="font-semibold">NODE JS</li>
                            <li className="font-semibold">FLUTTER</li>
                            <li className="font-semibold">JAVA</li>
                        </ol>
                        <label className="flex border-2 border-black p-2">Know More! </label>
                    </div>
                </div>
                <div className="card4">
                    <div className="card4-overlay flex flex-col md:gap-4 items-center justify-center">
                        <ol>
                            <li className="font-semibold">REACT</li>
                            <li className="font-semibold">NODE JS</li>
                            <li className="font-semibold">FLUTTER</li>
                            <li className="font-semibold">JAVA</li>
                        </ol>
                        <label className="flex border-2 border-black p-2">Know More! </label>
                    </div>
                </div>
            </div> */}
            <div className="container  flex items-center justify-center pl-10 pt-32 gap-16">
            <div className="card5 flex items-center justify-center gap-4">
                    <div className="card5Image flex  flex-col items-center justify-center ">
                    <img className="w-40 " src="/web1.png"></img>
                    </div>
                    <div className="card5Content">
                    <label className="text-black text-xl font-normal pb-2 fontFamily"><b>Web Applications</b></label>
                    <ol className="pt-4 fontFamily">
                            <li className="font-semibold">REACT</li>
                            <li className="font-semibold">NODE JS</li>
                            <li className="font-semibold">FLUTTER</li>
                            <li className="font-semibold">JAVA</li>
                        </ol>
                        {/* <label className="flex border-2 border-black p-2">Know More! </label> */}
                        <label className="text-black font-semibold"><u>Know More !</u></label>
                    </div>
                </div>
                <div className="card6  fontFamily gap-4">
                    <div className="card6Image flex  flex-col items-center justify-center ">
                    <img className="w-40 " src="/mobile1.png"></img>
                    </div>
                    <div className="card6Content">
                    <label className="text-black  text-xl font-normal "><b>Mobile Applications</b></label>
                    <ol className="pt-4">
                            <li className="font-semibold">FLUTTER</li>
                            <li className="font-semibold">ANIMA</li>
                            <li className="font-semibold">MUNIMA</li>
                        </ol>
                        {/* <label className="flex border-2 border-black p-2">Know More! </label> */}
                        <label className="text-black font-semibold"><u>Know More !</u></label>
                    </div>
                </div>
                <div className="card7 fontFamily flex items-center justify-center gap-4">
                    <div className="card7Image flex  flex-col items-center justify-center ">
                    <img className="w-40 " src="/uxui.png"></img>
                    </div>
                    <div className="card7Content">
                    <label className="text-black text-xl font-normal pb-2"><b>UX & UI Reasearh</b></label>
                    <ol className="pt-4">
                            <li className="font-semibold">FLUTTER</li>
                            <li className="font-semibold">ANIMA</li>
                            <li className="font-semibold">MUNIMA</li>
                        </ol>
                        {/* <label className="flex border-2 border-black p-2">Know More! </label> */}
                        <label className="text-black font-semibold"><u>Know More !</u></label>
                    </div>
                </div>
                <div className="card8  fontFamily flex items-center justify-center gap-4">
                    <div className="card8Image flex  flex-col items-center justify-center ">
                    <img className="w-40 " src="/brainstorming 1.png"></img>
                    </div>
                    <div className="card8Content">
                    <label className=" text-black text-xl font-normal pb-2"><b>AI & ML Applications</b></label>
                    <ol className="pt-4">
                            <li className="font-semibold">REACT</li>
                            <li className="font-semibold">NODE JS</li>
                            <li className="font-semibold">FLUTTER</li>
                            <li className="font-semibold">JAVA</li>
                        </ol>
                        {/* <label className="flex border-2 border-black p-2">Know More! </label> */}
                        {/* <label className="text-white font-semibold">Know More !</label> */}
                    </div>
                </div>

            </div>
        </div>

        {/* case studies ......................................................*/}
        <Casestudies />
        <div className="pt-12">
         <Testimonials />   
        </div>
        <div className="pt-12">
            <Contacts />
        </div>
    </div>
    </div>

);
}