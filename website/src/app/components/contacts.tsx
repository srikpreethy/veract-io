
import '../styles/styles.css'


export default function Contacts(){
    
    
    return(
        <div className=" flex flex-col pt-16 contactsMain  ">
            <div className="flex items-center justify-center">
            <hr></hr>
            <label className="text-3xl text-black font-semibold">Contact<span className="servicesHeading text-3xl font-semibold pl-4">Us</span></label>
            <hr></hr>
            </div>
            <div className='flex items-center justify-center pt-24'>
            <div className='contactContainer '>
                <div className="flex flex-row md:gap-2 flex  ">
                    <div className='flex flex-col md:gap-10 p-10'>
                        <div className='flex flex-row pt-10 '>
                            
                            <div><img src="/name_icon.png" className="w-10 pt-4"></img></div>
                            <input type="text" placeholder='NAME' className="nameBox p-6"></input>
                    
                        </div>
                        <div className='flex flex-row'>
                            
                            <div><img src="/phone_icon.png" className="w-10 pt-4"></img></div>
                            <input type="text" placeholder='PHONE' className="nameBox p-6 "></input>
                    
                        </div>
                        <div className='flex flex-row'>
                            
                            <div><img src="/mail_icon.png" className="w-10 pt-4"></img></div>
                            <input type="text" placeholder='E-MAIL' className="nameBox p-6 "></input>
                    
                        </div>
                        <div className='flex flex-row'>
                            
                            <div><img src="/org_icon.png" className="w-10 pt-4"></img></div>
                            <input type="text" placeholder='ORGANIZATION' className="nameBox p-6"></input>
                    
                        </div>
                    
                    <div>

                    </div>
                </div>
                <div>
                <div className='flex flex-col md:gap-8 pl-16 pt-20'>
                    <div className="">
                        <textarea className="w-96 h-32 p-6 nameBox " placeholder='Enter your remarks'></textarea>
                    </div>
                    <div className='flex flex-row'>
                            
                            <div><img src="/secure_icon.png" className="w-10 pt-4 "></img></div>
                            <input type="text" placeholder='Verification' className="nameBox p-6"></input>
                    
                        </div>
                        <div>
                            <div className='flex items-center justify-center w-96 h-24 submitBox'>
                                <label>Send Message</label>
                            </div>
                        </div>
                </div>
            </div>
            </div>
            
            </div>
    
        </div>

        </div>
    );
}