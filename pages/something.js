import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
export default function Something() {
    const [theArray, setTheArray] = useState([])
    useEffect(()=>{
        setTheArray(JSON.parse(localStorage.getItem("theArray")))
    },[])
    if (theArray==null){
        return ""
    }
  return (
      <div>
        {theArray.map((element)=>{
            return (<img src={element} key={Math.random()} />)
        })}
    </div>
  )
}
