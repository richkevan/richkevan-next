"use client"

import { useEffect } from "react"
import { firebaseAnalytics as analytics } from "@/lib/firebase/firebase"




export default function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      analytics
    }
    return
  }, [])
}