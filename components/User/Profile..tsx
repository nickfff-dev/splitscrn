import Us from './profile.module.css'
import Image from 'next/image';

const UserProfile = () => {




  return (
    <div className={`${Us.root}`}>
      <button className=" rounded-full  bg-gray-light px-3 mb-5 py-1 text-lg"><span className="capitalize bg-gradient-to-l from-primary via-secondary  to-[#f43d00] bg-clip-text font-bold text-transparent">Create A league</span></button>
      <div className={`${Us.container} `}>

        <div className={`${Us.containerleft}`}>
          <div className={`${Us.containerleftinner}`}>
            <img src="https://i.redd.it/rtqwmwm3tdy41.png" className="w-40 h-40" alt={''} />
            <div className={`${Us.containerleftinnertext}`}>
              <div className={`${Us.profiletext}`}><h1>Username:</h1> <p>My name</p></div>
              <div className={`${Us.profiletext}`}><h1>Email:</h1> <p>Myemalil@yahooo.com</p></div>
              <div className={`${Us.profiletext}`}><h1>Dob:</h1> <p>12/24/2022</p></div>
              <div className={`${Us.profiletext}`}><h1>Locale:</h1> <p> {Intl.DateTimeFormat().resolvedOptions().timeZone}</p></div>
            </div>

          </div>
        </div>
        <div className={`${Us.containerRight} `}>
          <h1>Upcoming Drafts</h1>
          <div className={`${Us.H}`}>
            <h2>F.Name</h2>
            <h2>Leaguename</h2>

            <h2>Confirmation</h2>
            <h2>draftDate</h2>
            <h2>Link</h2>



          </div>
          <div className={`${Us.containerRightInner} [&>*:nth-child(odd)]:bg-gray-medium [&>*:nth-child(even)]:bg-gray-light p-3 `}>


            <div className={`${Us.H}`}>
              <p> TeamA</p>
              <p> THEBESTlEAGUE</p>

              <p> true</p>

              <p>draftLink</p>
              <p> 12/24/2022</p>
            </div>

            <div className={`${Us.H}`}>
              <p> TeamA</p>
              <p> THEBESTlEAGUE</p>

              <p> true</p>

              <p>draftLink</p>
              <p> 12/24/2022</p></div>
            <div className={`${Us.H}`}>
              <p> TeamA</p>
              <p> THEBESTlEAGUE</p>

              <p> true</p>
              <p>draftLink</p>
              <p> 12/24/2022</p></div>
            <div className={`${Us.H}`}>
              <p> TeamA</p>
              <p> THEBESTlEAGUE</p>

              <p> true</p>
              <p>draftLink</p>
              <p> 12/24/2022</p></div>
            <div className={`${Us.H}`}>
              <p> TeamA</p>
              <p> THEBESTlEAGUE</p>

              <p> true</p>
              <p>draftLink</p>
              <p> 12/24/2022</p></div>
          </div>

        </div>
        <div className={`${Us.containerRight2} `}>
          <h1>Transaction History</h1>
          <div className={`${Us.H}`}>
            <h2>Type</h2>
            <h2>date</h2>
            <h2>amount</h2>
            <h2>completed</h2>
            <h2>credits</h2>
          </div>
          <div className={`${Us.containerRightInner} p-3 [&>*:nth-child(odd)]:bg-gray-medium [&>*:nth-child(even)]:bg-gray-light `}>


            <div className={`${Us.H}`}>
              <p> deposit</p>
              <p> 12/24/2022</p>
              <p> 100</p>
              <p> true</p>
              <p>95000</p></div>
            <div className={`${Us.H}`}>
              <p> deposit</p>
              <p> 12/24/2022</p>
              <p> 100</p>
              <p> true</p>
              <p>95000</p></div>
            <div className={`${Us.H}`}>
              <p> deposit</p>
              <p> 12/24/2022</p>
              <p> 100</p>
              <p> true</p>
              <p>95000</p></div>
            <div className={`${Us.H}`}>
              <p> deposit</p>
              <p> 12/24/2022</p>
              <p> 100</p>
              <p> true</p>
              <p>95000</p></div>
            <div className={`${Us.H}`}>
              <p> deposit</p>
              <p> 12/24/2022</p>
              <p> 100</p>
              <p> true</p>
              <p>95000</p></div>
          </div>

        </div>
        <div className={`${Us.belowcontainerleft}`}>
          <h1>My Leagues</h1>
          <div className={`${Us.belowcontainerleftH}`}>
            <h2>LEAGUE</h2>
            <h2>REGION</h2>
            <h2>StartDate</h2>
                <h2>Prize</h2>
           
            <h2>Points</h2>
          </div>
          <div className={`${Us.belowcontainerleftInner} [&>*:nth-child(odd)]:bg-gray-medium [&>*:nth-child(even)]:bg-gray-light`}>
            
          <div className={`${Us.H}`}>
              <p>THEBESTlEAGUE</p>
              <p> LEC</p>

              <p> 12/24/2022</p>
              <p>$100</p>
              <p> 12345</p>
            </div>
            <div className={`${Us.H}`}>
              <p>THEBESTlEAGUE</p>
              <p> LEC</p>

              <p> 12/24/2022</p>
              <p>$100</p>
              <p> 12345</p>
            </div>
            <div className={`${Us.H}`}>
              <p>THEBESTlEAGUE</p>
              <p> LEC</p>

              <p> 12/24/2022</p>
              <p>$100</p>
              <p> 12345</p>
            </div>
            <div className={`${Us.H}`}>
              <p>THEBESTlEAGUE</p>
              <p> LEC</p>

              <p> 12/24/2022</p>
              <p>$100</p>
              <p> 12345</p>
            </div>
          </div>
        </div>
        <div className={`${Us.belowContainerRight}`}>
          <h1>My Trades</h1>
          <div className={`${Us.belowContainerRightH}`}>
            <h2>LEAGUE</h2>
            <h2>DATE</h2>
            <h2>PLAYERIN</h2>
            <h2>PLAYEROUT</h2>
            <h2>CREDITS</h2>
          </div>
          <div className={`${Us.belowContainerRightInner} [&>*:nth-child(odd)]:bg-gray-medium [&>*:nth-child(even)]:bg-gray-light`}>
          <div className={`${Us.H}`}>
              <p>THEBESTlEAGUE</p>
              <p> 12/24/2022</p>

              <p> NUGURI</p>
              <p>DOVE</p>
              <p> 12345</p>
            </div>  
            <div className={`${Us.H}`}>
              <p>THEBESTlEAGUE</p>
              <p> 12/24/2022</p>

              <p> NUGURI</p>
              <p>DOVE</p>
              <p> 12345</p>
            </div>
            <div className={`${Us.H}`}>
              <p>THEBESTlEAGUE</p>
              <p> 12/24/2022</p>

              <p> NUGURI</p>
              <p>DOVE</p>
              <p> 12345</p>
            </div>
            <div className={`${Us.H}`}>
              <p>THEBESTlEAGUE</p>
              <p> 12/24/2022</p>

              <p> NUGURI</p>
              <p>DOVE</p>
              <p> 12345</p>
            </div>
            
          </div>
</div>
      </div>

    </div>
  );
};


export default UserProfile;
