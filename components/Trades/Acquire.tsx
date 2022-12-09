
import AcquireLine from "./AcquireLine"

const Acquire = () => {
  return (<div className="bg-gradient-to-r from-primary to-secondary  p-[2px] rounded-[16px] max-w-[1100px] w-full mx-auto">
    <div className="bg-gray-dark rounded-[16px] p-5">
      <div className="grid grid-flow-row grid-cols-8 auto-rows-auto  space-x-3 ">
        
      <div className="col-start-1 col-end-2 row-start-1 row-end-2  text-gray-300    p-2  rounded-xl">
      <h1 className=" font-bold text-xl bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent">ACQUIRE</h1>  </div>
      <div className="col-start-8 col-end-9 row-start-1 row-end-2  text-gray-300     ">
      <input className="text-left rounded-full bg-gray-light border px-2 border-gray-light h-8  w-full" placeholder="Search...."/> </div>

        <div className="col-start-1 col-end-9  row-start-4 row-end-7  text-gray-300  p-2 text-center rounded-xl">
          
          <div className="grid grid-flow-row grid-cols-9  space-x-3 space-y-1 px-3 py-1">
          <p>NAME</p>
        <p>REGION</p>
        <p>TEAM</p>
        <p>RELEASE</p>
        <p>ROLE</p>
            <p>PRICE</p> 
            <p></p> 
            <p>AVG POINTS</p>
            <p></p>

          </div>
 <AcquireLine/>
          <AcquireLine />
          <AcquireLine />
          <AcquireLine/> <AcquireLine/> <AcquireLine/> <AcquireLine/> <AcquireLine/>
      
      </div>
      </div>
      
    </div>
  </div>)
}

export default Acquire
