import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Webcam from "react-webcam";
import { useState, useRef, useCallback, useEffect } from "react";
import {useRouter} from "next/router"
import Router from "next/dist/server/router";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const router = useRouter()

  const handleSubmit = (event)=> {
    event.preventDefault()
    console.log(img)
    let temparr = []
    if (array!=null){
       temparr = array
       temparr.push(img)
    }
    else{
      temparr[0]=img
    }
    setArray(temparr)
    
    localStorage.setItem("theArray", JSON.stringify(array))
  } 

  const [array, setArray] = useState([])

  useEffect(()=>{
    
    setImg(null)
    setArray(JSON.parse(localStorage.getItem("theArray")))
  },[])
  const [name, setName] = useState("k")
  const [email, setEmail] = useState("string@vitstudent.ac.in")
  const [phno, setPhno] = useState("99")
  const [address, setAddress] = useState("adsf")
  const [gender, setGender] = useState("male")
  const [img, setImg] = useState(null);
  const isEmailValid = ()=>{
    
    if(email.endsWith("@vitstudent.ac.in")){
      return true
    }
    else 
    {
      return false
  }}

  const result = isEmailValid()


  const webcamRef = useRef(null);
  const videoConstraints = { width: 400, height: 400, facingMode: "user" };
  const capture = useCallback(() => {   
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    console.log(imageSrc)
  }, [webcamRef, setImg]);
  return (
    <div className="p justify-evenly flex p-4 m-4 border-2 border-red-400">
    
      {img===null?
      (<div className="flex flex-col border-2 w-max">
      <Webcam
        audio={false}
        screenshotQuality={0.9}
        ref={webcamRef}
        height={400}
        width = {400}
        mirrored={true}
        screenshotFormat="image/jpeg"
        videoConstraints= {videoConstraints}

      />
      <div className="border-2 flex justify-center m-4">
      <button className= "w-[40%] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={capture}>Click photo</button>
      </div>
      </div>
      ):
      (<div className="flex flex-col border-2 w-max">
          <img src= {img} alt = "screenshot" />
          <div className="border-2 flex justify-center m-4">

          <button className="w-[40%] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={()=>setImg(null)}>Retake</button>
          </div>
          </div>
      )  
    }
      

      
              <div className="flex flex-col border-2 w-[50%] p-2">        

      <form onSubmit={(event)=>handleSubmit(event)}>

        <div className="m-2"><label htmlFor="name">Name</label><input onChange={(event)=>setName(event.target.value)} id="name" type="text" className="h-8 ml-6 w-72" value={name}  required/></div>
        <div className="m-2"><label htmlFor="email">Email</label><input  onChange={(event)=>setEmail(event.target.value)} id="email" type="email" className="h-8 ml-7 w-72" value={email} required/></div>
        <div className=" text-red-700 ml-2">{result?"":"Please enter the correct vit email id"}</div>
        <div className="m-2"><label htmlFor="phno">Ph. No.</label><input onChange={(event)=>setPhno(event.target.value)}  id="phno" type="tel" className="h-8 ml-4 w-72" value={phno} required/></div>
        <div className="m-2"><label htmlFor="address">Address</label><input onChange = {(event)=>setAddress(event.target.value)}id="address" type="text" className="h-8 ml-3 w-72" value={address} required/></div>
        <div className="m-2"><label htmlFor="gender">Gender</label><input id="gender" onChange={(event)=>setGender(event.target.value)} type="text" className="h-8 ml-4 w-72" value={gender} required/></div>
        <div><button type="submit" className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Submit</button></div>
        <div><Link href="/something"> <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-4">Congrats page</button></Link></div>

        </form>
        </div>

    </div>
  );
}
