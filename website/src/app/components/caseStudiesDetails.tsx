import '../styles/styles.css';

export default function CasestudiesDetails(){
    return(
        <div className="flex flex-row items-center justify-center pt-32 md:gap-6 ">
            <div className='flex flex-col '>
                <div className="left-column">
                    <div ><img src="/factoryLine.png"></img></div>
                </div>
                <div className="right-column flex flex-col md:gap-4 w-1/2">
                    <label ><b>Challenge:</b><br></br> Digitizing manufacturing process in low tech adoption workforce in high dust, high temp  environment</label>
                    <label ><b>Scope:</b><br></br> Custom Webapplication -concept to code UX design, UI,Usablity testing ,DB Architecture and Software architecture</label>
                </div>
            </div>
        </div>
    );
}
