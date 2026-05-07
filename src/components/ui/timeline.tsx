import { useScroll, useTransform, motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full bg-black font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-32 md:gap-10">
            {/* Sticky title column — fixed width, won't overflow */}
            <div className="sticky top-40 self-start z-40 flex flex-col md:flex-row items-center shrink-0 w-10 md:w-64 lg:w-72">
              {/* Dot */}
              <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center border border-[#AAFF00] shrink-0">
                <div className="h-4 w-4 rounded-full bg-[#AAFF00]" />
              </div>
              {/* Title — only on md+ */}
              <h3 className="hidden md:block md:pl-6 text-3xl lg:text-4xl font-bold text-[#AAFF00] font-display leading-tight">
                {item.title}
              </h3>
            </div>

            {/* Content column */}
            <div className="relative pl-6 pr-4 w-full min-w-0">
              {/* Mobile title */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#AAFF00] font-display">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Progress line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#AAFF00] via-lime-300 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
