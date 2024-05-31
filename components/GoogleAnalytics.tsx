"use client"

import { useEffect } from "react"
import { analytics } from "@/lib/firebase/firebase"
import { isSupported } from "firebase/analytics"




export default function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("GoogleAnalytics.tsx: ", analytics)    
      analytics
    }
    return
  }, [])
}