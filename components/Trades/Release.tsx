
import ReleaseLine from "./ReleaseLine"
const Release = () => {
  
  
  
  return (
    
    <div className="bg-gradient-to-r from-primary to-secondary p-[2px] rounded-[16px] max-w-[1100px] w-full mx-auto">
    <div className="bg-gray-dark rounded-xl py-7 pl-20 ">
      <div className="grid grid-flow-row grid-cols-8 auto-rows-auto items-center  space-x-3 ">
        
      <div className="col-start-2 col-end-4 row-start-1 row-end-2  text-gray-300     rounded-xl">
      <span >
          <button id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider1" className="font-medium rounded-lg text-sm  text-center text-white text-lg inline-flex items-center font-bold uppercase" type="button">FREE : <span>FREE AGENT</span><svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
          <div id="dropdownDivider1" className="hidden absolute z-20 w-32 ml-2 text-center bg-white max-w-40  rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
              <li> <button 
                className="inline py-2 px-4 uppercase">players</button>
              </li>
              <li>
                <button 
                  className="inline py-2 px-4 uppercase ">teams</button>
              </li>

            </ul>
          </div></span>  </div>
            <div className="col-start-4 col-end-6 row-start-1 row-end-2  text-gray-300    p-2  rounded-xl">
            <span>
          <button id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider1" className="font-medium rounded-lg text-sm  text-center text-white text-lg inline-flex items-center font-bold uppercase" type="button">ROLE : <span>TOP</span><svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
          <div id="dropdownDivider1" className="hidden absolute z-20 w-32 ml-2 text-center bg-white max-w-40  rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
              <li> <button 
                className="inline py-2 px-4 uppercase">players</button>
              </li>
              <li>
                <button 
                  className="inline py-2 px-4 uppercase ">teams</button>
              </li>

            </ul>
          </div></span>
  </div>
      <div className="col-start-6 col-end-8 row-start-1 row-end-2  text-gray-300     ">
      <input className="text-left rounded-full bg-gray-light border px-2 border-gray-light h-8  w-full" placeholder="Search...."/> </div>

        <div className="col-start-1 col-end-8  row-start-4 row-end-7  text-gray-300  p-2 text-center rounded-xl bo">
          
          <div className="grid grid-flow-row grid-cols-8  space-x-3 space-y-1 px-3 py-1 border mb-6">
          <p>NAME</p>
        <p>ROLE</p>
        <p>TEAM</p>
      
              <p>POINTS</p>
              <p>PRICE</p> 
            <p>FREE AGENT</p> 
            
          
         

          </div>
 <ReleaseLine/>
          <ReleaseLine />
          <ReleaseLine />
          <ReleaseLine/> <ReleaseLine/> <ReleaseLine/> <ReleaseLine/> <ReleaseLine/>
      
      </div>
      </div>
      
    </div>
  </div>
  
  )
}








export default Release
