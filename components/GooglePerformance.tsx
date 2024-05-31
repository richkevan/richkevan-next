"use client"

import { useEffect } from "react"
import { performance } from "@/lib/firebase/firebase"





export default function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      performance
    }
    return
  }, [])
}