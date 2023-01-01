import Head from 'next/head'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
import Link from "next/link"
export default function Something() {
    const [theArray, setTheArray] = useState([])
    useEffect(()=>{
        setTheArray(JSON.parse(localStorage.getItem("theArray")))
    },[])
   
    return (<div className='flex flex-col'>
            <div className='flex  justify-center m-4 h-48 align-middle' ><div className=' h-min self-center'>Congratulations! Your image has been uploaded successfully!</div></div>
            <div className='flex  justify-center'><Link href="/"><button className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'>Go back</button></Link> </div>
            <div className='m-8'>All previous images:</div>
            <div className='flex  justify-center'>
            {theArray==null?"":(      <div className='flex justify-center'>
        {theArray.map((element)=>{

            return (<div className='flex  justify-center border-red-600 ml-1 mr-1' key={Math.random()}><Image src={element} width={250} height={250} alt={"the image"} /></div>)
        })}
    </div>)}
    </div>
            </div>
            )
    }
 

  

