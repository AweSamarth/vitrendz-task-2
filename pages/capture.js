import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Webcam from "react-webcam";
import { useState, useRef, useCallback } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const onSubmit = ()=>{

  }  
  

  const [name, setName] = useState("")
  const [email, setEmail] = useState("string")
  const [phno, setPhno] = useState("")
  const [address, setAddress] = useState("")
  const [gender, setGender] = useState("")
  const [img, setImg] = useState(null);
  const isEmailValid = ()=>{
    console.log("checking")
    if(email.endsWith("@vitstudent.ac.in")){
      console.log(email)
      return true
    }
    else 
    {
      console.log(email)
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
    <div className="flex flex-col border-2 w-max">
      <Webcam
        audio={false}
        screenshotQuality={0.9}
        ref={webcamRef}
        height={400}
        width = {400}
        mirrored={true}
        screenshotFormat="image/png"
        videoConstraints= {videoConstraints}

      />
      <div className="border-2 flex justify-center m-4">
      <button className= "w-[40%] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={capture}>Click photo</button>
      </div>

      </div>
              <div className="flex flex-col border-2 w-[50%] p-2">        

      <form>

        <div className="m-2"><label htmlFor="name">Name</label><input onChange={(event)=>setName(event.target.value)} id="name" type="text" className="h-8 ml-6" value={name}  required/></div>
        <div className="m-2"><label htmlFor="email">Email</label><input onChange={(event)=>setEmail(event.target.value)} id="email" type="email" className="h-8 ml-7" value={email} required/></div>
        <div className=" text-red-700">{result?"huh":"Please enter the correct vit email id"}</div>
        <div className="m-2"><label htmlFor="phno">Ph. No.</label><input onChange={(event)=>setPhno(event.target.value)} id="phno" type="tel" className="h-8 ml-4" value={phno} required/></div>
        <div className="m-2"><label htmlFor="address">Address</label><input onChange = {(event)=>setAddress(event.target.value)}id="address" type="text" className="h-8 ml-3" value={address} required/></div>
        <div className="m-2"><label htmlFor="gender">Gender</label><input id="gender" onChange={(event)=>setGender(event.target.value)} type="text" className="h-8 ml-4" value={gender} required/></div>
        </form>
        </div>

    </div>
  );
}
