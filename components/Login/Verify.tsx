


import { useState, useEffect } from "react"

import dayjs from "dayjs";

const Verify = ({ owner }: { owner: any }) => {

  const [verificationCode, setVerificationCode] = useState(0);
  const [newCode, setNewCode] = useState(0);
  const [verified, setVerified] = useState(owner.emailVerified);
  const [enterDetails, setEnterDetails] = useState(false)
  const [usernewname, setUser] = useState("");
  const [birthDate, setBirthDate] = useState("");

  useEffect(() => { 



    if (verified) {
      window.location.href = "http://localhost:3000/user/profile";
    }
  }, [verified])
  const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);


  }
  const onBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(dayjs(e.target.value).toDate().toISOString());


  }




  const onVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(Number(e.target.value));
  }


  const onVerificationCodeSubmit = async () => {
    if (verificationCode === newCode) {
      setEnterDetails(true)
    } else {
      alert("wrong verification code please try again")

    }
  }
  const onVerifyUser = async () => {
    try {
      await fetch(`/api/user/verify`, {
        method: "POST",
        body: JSON.stringify({
          email: owner.email,
          name: owner.name,
        })
      }).then((res) => {
        res.text().then((data) => {
          console.log(data);
          if (data.includes("success")) {

            setNewCode(Number(data.split(" ")[1]));

          }
        })

      })
    } catch (error) {
      console.log(error);
    }
  }
  const submitDetails = async () => {
    const userName = usernewname
    const birthDay = birthDate
    const email = owner.email
    const task = "save user"
    const name = owner.name

    try {
      await fetch(`/api/user/${name}`, {
        method: "POST",
        body: JSON.stringify({
          userName,
          email,
          birthDay,
          task
        })
      }).then((res) => {
        res.text().then((data) => {
          if (data === "success") {
            setVerified(true)
          }
        })
      })

    } catch (error) {
      console.log(error);
    }
  }

  return <div className="bg-gray-dark  ">
     <div className=" max-w-[600px] mx-auto ">
    {
      !verified ? (<div className="mt-24">
        {
          enterDetails ? (<form>
            <div className="  text-white mb-6">
              <label className="uppercase" htmlFor="usernewname">Enter Your UserName</label>
              <input type="text" name="usernewname" onChange={onUserNameChange} className="h-10  text-gray-300 font-bold  mt-1  px-4 w-full bg-gray-light rounded-full" />

            </div>
            <div className=" text-white mb-6">
              <label className="uppercase" htmlFor="birthDate">Enter Your Birthdate</label>
              <input type="date" name="birthDate" onChange={onBirthDateChange} className="h-10  text-gray-300 font-bold  mt-1  px-4 w-full bg-gray-light rounded-full" /></div>

            <button className="bg-gradient-to-r from-primary to-secondary font-bold px-4 py-2 rounded-xl capitalize mb-6" onClick={submitDetails} type="submit" value="Submit">submit</button> </form>

          ) : (<div >     <div className="text-center text-gray-dark font-bold ">
            <button className="bg-gradient-to-r from-primary to-secondary  px-4 py-2 rounded-xl capitalize mb-6" onClick={onVerifyUser}>click to send verification code</button>

          </div>
            <div className="text-white mb-6 text-center">
              <label className="uppercase" htmlFor="verificationcode">check your email and enter code</label>
              <input type="text" name="verificationcode" onChange={onVerificationCodeChange} className="h-10  text-gray-300 font-bold  mt-1 mb-6 px-4 w-full bg-gray-light rounded-full text-center" /> <button className="bg-gradient-to-r from-primary to-secondary text-gray-dark font-bold capitalize px-4 py-2 rounded-xl " onClick={onVerificationCodeSubmit} type="submit" value="Submit">submit</button></div>

            </div>)
        }
      </div>) : (<p className="text-center">you are already verified redirecting...</p>)
    }
</div>
  </div>
}


export default Verify
