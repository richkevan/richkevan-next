"use client"

import { useEffect } from "react"
import { firebasePerformance } from "@/lib/firebase/firebase"




export default function GooglePerformance() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      firebasePerformance
    }
    return
  }, [])
}