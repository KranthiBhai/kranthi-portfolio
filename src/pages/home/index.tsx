import React from 'react'
import { DetailsCard } from '../../components/DetailsCard'
import Shell from '../../components/Shell'

export default function Home() {
  return (
          <div>
            <Shell >
              <div className="w-[40%] h-full flex items-center justify-end bg-[#C36A2D]">
              <DetailsCard />
              </div>
            </Shell>
          </div>
  )
}
