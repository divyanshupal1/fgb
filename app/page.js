"use client"

import Image from 'next/image'
import LoadingScreen from '@/components/system/Loading/LoadingScreen'
import { useEffect,useState } from 'react'


export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {loading && <LoadingScreen />}
    </main>
  )
}
