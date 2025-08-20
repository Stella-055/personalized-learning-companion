import React from 'react'
import { getSubjectColor } from '@/lib/utils'
import Image from 'next/image'
import { cn } from '@/lib/utils'
const CompanionComponent = ({ companionId, subject, topic, name, userName, userImage, style, voice }: CompanionComponentProps) => {
  return (
    <section className="flex flex-col h-[70vh]">
          <section className="flex gap-8 max-sm:flex-col">

          <div className="companion-section"> 
          <div className="companion-avatar" style={{ backgroundColor: getSubjectColor(subject)}}> 
          <div
                            className={
                            cn(
                                'absolute transition-opacity duration-1000', 
                            )
                        }>
                            <Image src={`/icons/${subject}.svg`} alt={subject} width={150} height={150} className="max-sm:w-fit" />
                        </div>
          </div>
          </div>
          </section>
         </section>
  )
}

export default CompanionComponent
