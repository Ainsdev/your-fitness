"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"


export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="relative grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <AspectRatio ratio={16 / 9}>
        <Link
          href="/"
          className="absolute left-8 top-6 z-20 flex items-center text-xl font-bold tracking-tight"
        >
          <ArrowLeft className="mr-2 h-6 w-6" aria-hidden="true" />
          <span>YourFitness</span>
        </Link>
        <p className="absolute bottom-8 left-8 z-20 hidden text-2xl font-semibold tracking-tight text-white sm:flex">
          {pathname === "/sign-up"
            ? "El lugar donde encuentras la moda que necesitas."
            : "La simplicidad es la máxima forma de sofisticacion."}
        </p>
        <Image
          src="https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A skateboarder doing a high drop"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-foreground/30 dark:md:to-background/40" />
      </AspectRatio>
      <main className="container absolute top-1/4 col-span-1 flex items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        <div
        className="pattern-dots absolute top-0 -z-10 h-full w-full pattern-bg-transparent 
    pattern-orange-500 pattern-opacity-20 pattern-size-4 dark:pattern-white dark:pattern-opacity-10 dark:pattern-size-4"
        style={{
          clipPath: "ellipse(67% 59% at 18% 97%)",
        }}
      />
        {children}
      </main>
    </div>
  )
}