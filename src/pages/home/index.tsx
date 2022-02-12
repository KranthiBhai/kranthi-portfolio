import React from 'react'
import { DetailsCard } from '../../components/DetailsCard'
import Shell from '../../components/Shell'

export default function Home() {
  return (
          <div>
            <Shell classNames="w-[40%] bg-[#d3d3d3]">
              <DetailsCard />
            </Shell>
          </div>
  )
}
