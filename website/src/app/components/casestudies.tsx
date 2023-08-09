import '../styles/styles.css'

export default function Casestudies(){
    return(
        <div className="pt-20 p-10 caseStudiesPage">
            <div className="flex flex-row md:gap-4 pb-2">
                <div className="flex  h-44 w-1/2 border-black bg-primary items-center justify-center main-box">
                    <div className="manufacturing " ><label>Manufacturing</label></div>
                    <div className="manufacturing-content "><label >Challenge: 
Digitizing manufacturing process in low tech adoption workforce in high dust, high temp  environment</label></div>
                </div>
                <div className="flex  h-44 w-1/2 border-black bg-primary items-center justify-center sales-box">
                    <div className="sales"><label>Sales Management</label></div>
                    <div className="sales-content"><label>Challenge :Multi product Multi location with remote travelling sales team and 
each product with its own unique quote workflow requirements</label></div>
                </div>
            </div> 
            <div className="flex flex-row md:gap-4 pb-2">   
                <div className="flex  h-44 w-1/2 border-black bg-primary items-center justify-center hr-box">
                    <div className="hr"><label>Hr Tech</label></div>
                    <div className="hr-content"><label>Challenge: Feature rich HR tracking tool delivered in days </label></div>
                </div>
                <div className="flex   h-44 w-1/2 border-black bg-primary items-center justify-center agri-box">
                    <div className="agri"><label>Sales Management</label></div>
                    <div className="agri-content"><label>Challenge: Web application designed for   poor internet environment and low tech adoption  environment</label></div>
                </div>
            </div>
        </div>
    )
}