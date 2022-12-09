

const TradeLine = () => {
  return (

      <div className="grid grid-flow-row grid-cols-6 auto-rows-[32px] mt-2 space-x-3 bg-gray-light px-3 py-1 rounded-full">
       <button className="rounded-full px-5 capitalize my-auto uppercase outline  outline-secondary   max-w-max"><span className="uppercase">select</span></button>
        <p className="my-auto  ">ACQUIRE</p>
        <button className="rounded-full px-5 capitalize my-auto  outline  outline-secondary uppercase   max-w-max"><span className="uppercase">select</span></button>
        <p  className="my-auto">RELEASE</p>
        <p  className="my-auto"></p>
        <p  className="my-auto">CASH</p> 
        </div>
      
    )
}


export default TradeLine
