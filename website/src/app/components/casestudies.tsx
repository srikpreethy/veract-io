import '../styles/styles.css'
// import RotatingCircle from './rotatingCases'

export default function Casestudies(){
    return(
        // <div className="pt-28 p-10 caseStudiesPage ">
        //      <div className="flex items-center justify-center">
        //     <hr></hr>
        //     <label className="text-3xl text-black font-semibold">Our <span className="servicesHeading text-3xl font-semibold">Portfolio</span></label>
        //     <hr></hr>
        //     </div>
        //     <div className="flex flex-row md:gap-4 pb-2 pt-32">
        //         <div className="flex  h-44 w-1/2 border-black bg-primary items-center justify-center main-box">
        //         <div className="flex flex-col md:gap-4">
        //             <img className="w-48"src="/factoryLine.png"></img>
        //             <div className="manufacturing pr-8" >
        //                     <label className="font-semibold pl-4 text-3xl">Manufacturing</label>
        //             </div>
        //         </div>    
        //             <div className="manufacturing-content "><label ><b>Challenge:</b> Digitizing manufacturing process in low tech adoption workforce in high dust, high temp  environment</label>
        //             </div>
        //         </div>
        //         <div className="flex  h-44 w-1/2 border-black bg-primary items-center justify-center sales-box">
        //             <div className="flex flex-col md:gap-4">
        //                 <img   className="w-48" src="/customer.png"></img>
        //                 <div className="sales"><label className="font-semibold text-3xl">Sales Management</label></div>
        //             </div>
        //             <div className="sales-content"><label><b>Challenge:</b> Multi product Multi location with remote travelling sales team and each product with its own unique quote workflow requirements</label></div>
        //         </div>
        //     </div> 
        //     <div className="flex flex-row md:gap-4 pt-12">   
        //         <div className="flex  h-44 w-1/2 border-black bg-primary items-center justify-center hr-box">
        //             <div className="flex flex-col md:gap-4">
        //                 <img className="w-48" src="/recruitment.png"></img>
        //                 <div className="hr"><label className="font-semibold pl-8 text-3xl">Hr Tech</label></div>
        //             </div>
        //             <div className="hr-content"><label><b>Challenge:</b> Feature rich HR tracking tool delivered in days </label></div>
        //         </div>
        //         <div className="flex   h-44 w-1/2 border-black bg-primary items-center justify-center agri-box">
        //             <div className="flex flex-col md:gap-4">
        //                 <img className="w-48" src="/tractor1.png"></img>
        //                 <div className="agri"><label className='font-semibold pl-8 text-3xl'>Agri Tech</label></div>
        //             </div>
        //             <div className="agri-content"><label><b>Challenge:</b> Web application designed for   poor internet environment and low tech adoption  environment</label></div>
        //         </div>
        //     </div>
        // </div>
        <div className="pt-28 p-10 caseStudiesPage ">
             <div className="flex items-center justify-center">
            <hr></hr>
            <label className="text-3xl text-black font-semibold">Our <span className="servicesHeading text-3xl font-semibold">Portfolio</span></label>
            <hr></hr>
            </div>
            <div className="flex pb-2 pt-32 items-center justify-center md:gap-16 ">
                <div className="flex flex-col  bg-primary main-box">
                <div className="flex flex-col md:gap-4 " >
                    <img  className="w-20"src="/factoryLine.png"></img>
                    <div className="manufacturing pr-8" ><label className="font-semibold text-base">Manufacturing</label>
                    </div>    
                </div>
                <div className="manufacturing-content"><label ><b>Challenge:</b> Digitizing manufacturing process in low tech adoption workforce in high dust, high temp  environment</label><br></br>
                    <label><b>Scope :</b>Custom Webapplication -concept to code UX design, UI,Usablity testing ,DB Architecture and Software architecture.</label>
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
                {/* <div className="flex  border-black bg-primary sales-box">
                    <div className="flex flex-col md:gap-4">
                        <img   className="w-20" src="/customer.png"></img>
                        <div className="sales"><label className="font-semibold text-base">Sales Management</label></div>
                    <div className="sales-content"><label><b>Challenge:</b> Multi product Multi location with remote travelling sales team and each product with its own unique quote workflow requirements</label></div>
                    </div>
                </div> */}
                <div className="flex  border-black bg-primary hr-box">
                    <div className="flex flex-col md:gap-4">
                        <img className="w-20" src="/recruitment.png"></img>
                        <div className="hr"><label className="font-semibold pl-8 text-base">Hr Tech</label></div>
                    </div>
                    <div className="hr-content"><label><b>Challenge:</b> Feature rich HR tracking tool delivered in days </label></div>
                </div>
                <div className="flex  border-black bg-primary agri-box">
                    <div className="flex flex-col md:gap-4">
                        <img className="w-20" src="/tractor1.png"></img>
                        <div className="agri"><label className='font-semibold pl-8 text-base'>Agri Tech</label></div>
                    </div>
                    <div className="agri-content"><label><b>Challenge:</b> Web application designed for   poor internet environment and low tech adoption  environment</label></div>
                </div>  
                <div className="flex  border-black bg-primary agri-box">
                    <div className="flex flex-col md:gap-4">
                        <img className="w-20" src="/exercise.png"></img>
                        <div className="agri"><label className='font-semibold pl-8 text-base'>Wellness</label></div>
                    </div>
                    <div className="agri-content"><label><b>Challenge:</b> Web application designed for   poor internet environment and low tech adoption  environment</label></div>
                </div>  
                <div className="flex  border-black bg-primary agri-box">
                    <div className="flex flex-col md:gap-4">
                        <img className="w-20" src="/borrow.png"></img>
                        <div className="agri"><label className='font-semibold pl-8 text-base'>Fintech</label></div>
                    </div>
                    <div className="agri-content"><label><b>Challenge:</b> Web application designed for   poor internet environment and low tech adoption  environment</label></div>
                </div>  
                
            </div> 
            <div className="flex flex-row items-center justify-center md:gap-10 pt-16 "> 
               
                
            </div>
        
        </div>
        // <div className="pt-28 p-10 caseStudiesPage ">
        //      <div className="flex items-center justify-center">
        //     <hr></hr>
        //      <label className="text-3xl text-black font-semibold">Our <span className="servicesHeading text-3xl font-semibold">Portfolio</span></label>
        //         <hr></hr>
        //      </div>
        // <div className='pt-16'>
        //     <div className='circle flex flex-row'>
        //         <div className="flex flex-row items-center justify-between">
        //             <div className="factoryImage">   
        //                 <img className='w-16  overflow-hidden' src="/factoryLine.png"></img>
        //             </div>
        //             <div className="welnessImage">
        //                 <img className='w-16  overflow-hidden' src="/exercise.png"></img>
        //             </div>
        //         </div>
        //         {/* <div className="flex flex-row items-center justify-between ">
        //             <div>
        //             <div className="salesImage">
        //                 <img className='w-16  overflow-hidden' src="/sales1.png"></img>
        //             </div>
        //             <div className="fintechImage">
        //                 <img className='w-16  overflow-hidden' src="/borrow.png"></img>
        //             </div>
        //             </div>
        //         </div> */}

        //     </div>
        // </div>
        // </div>
    )
}