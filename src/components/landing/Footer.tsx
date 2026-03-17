"use client"



import { Zap } from "lucide-react"



export function Footer() {

  return (

    <footer className="py-12 px-4 sm:px-6 border-t border-white/5">

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">

          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-deep to-brand-teal flex items-center justify-center">

            <Zap className="w-3 h-3 text-white" />

          </div>

          <span className="font-semibold text-sm text-white">

            LaunchStack AI

          </span>

        </div>

        <div className="flex items-center gap-6 text-sm text-brand-gray">

          <a href="/privacy" className="hover:text-white transition-colors">

            Privacy

          </a>

          <a href="/terms" className="hover:text-white transition-colors">

            Terms

          </a>

          <a

            href="mailto:support@launchstack.ai"

            className="hover:text-white transition-colors"

          >

            Contact

          </a>

        </div>

        <p className="text-xs text-brand-gray/50">

          &copy; {new Date().getFullYear()} LaunchStack AI

        </p>

      </div>

    </footer>

  )

}
