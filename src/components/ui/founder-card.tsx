'use client'

import React from 'react'
import Image from 'next/image'
import { Linkedin, Github, User } from 'lucide-react'

type Founder = {
  name: string
  role: string
  photo: string | null
  linkedin: string | null
  github: string | null
  bio: string
  focusAreas: string[]
}

export function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-7 shadow-sm">
      <div className="flex items-center gap-4">
        {founder.photo ? (
          <Image
            src={founder.photo}
            alt={founder.name}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          // TODO: Set `founder.photo` to a real local image path (e.g. '/founder.jpg')
          // once supplied. This is a neutral local placeholder — not an AI portrait.
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-slate-300 bg-slate-100 text-slate-400 dark:border-white/15 dark:bg-white/5 dark:text-slate-500"
            title="Founder photo to be added"
            aria-label="Founder photo placeholder"
          >
            <User className="h-7 w-7" />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {founder.name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {founder.role}
          </p>
        </div>
      </div>

      <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
        {founder.bio}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {founder.focusAreas.map((area) => (
          <span
            key={area}
            className="inline-flex items-center rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
          >
            {area}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {founder.linkedin ? (
          <a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:hover:border-indigo-400/40 dark:hover:text-indigo-300"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        ) : (
          // TODO: Add real LinkedIn URL to enable this link.
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-slate-200 dark:border-white/10 text-slate-300 dark:text-slate-600"
            title="LinkedIn — coming soon"
          >
            <Linkedin className="h-4 w-4" />
          </span>
        )}
        {founder.github ? (
          <a
            href={founder.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:hover:border-indigo-400/40 dark:hover:text-indigo-300"
          >
            <Github className="h-4 w-4" />
          </a>
        ) : (
          // TODO: Add real GitHub URL to enable this link.
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-slate-200 dark:border-white/10 text-slate-300 dark:text-slate-600"
            title="GitHub — coming soon"
          >
            <Github className="h-4 w-4" />
          </span>
        )}
      </div>
    </div>
  )
}
