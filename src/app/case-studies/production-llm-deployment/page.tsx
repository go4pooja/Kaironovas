import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowDown, Check, FlaskConical, ImageOff } from 'lucide-react'
import {
  architecture,
  demonstrates,
  benchmark,
  screenshots,
  SHOW_BENCHMARK,
} from '@/lib/caseStudy'

export const metadata: Metadata = {
  title: 'Production LLM Deployment | Kaironovas Engineering Lab',
  description:
    'How Kaironovas approaches production LLM deployment: model serving with vLLM, GitOps with ArgoCD, Kubernetes, GPU serving, authentication, and observability with Prometheus and Grafana.',
}

export default function ProductionLLMDeploymentPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080a12]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 bg-[#0b0f1e] text-white">
          <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="relative container mx-auto px-6">
            <Link
              href="/case-studies"
              className="text-sm text-slate-400 hover:text-indigo-300 transition-colors"
            >
              ← Back to case studies
            </Link>
            <div className="mt-6 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-200 mb-6">
                <FlaskConical className="h-4 w-4 text-indigo-300" />
                Kaironovas Engineering Lab
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
                Inside a Production AI Deployment
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                A look at how Kaironovas approaches model serving, GitOps, GPU
                infrastructure, observability, and production deployment. This is a
                Kaironovas Engineering Lab reference deployment — not a customer
                project.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-20 bg-white dark:bg-[#080a12]">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              Deployment architecture
            </h2>
            <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.03] p-5 sm:p-6">
              {architecture.map((node, index) => (
                <div key={node.title}>
                  <div className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.05] p-4 shadow-sm">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-xs font-semibold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {node.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {node.detail}
                      </div>
                    </div>
                  </div>
                  {index < architecture.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <ArrowDown className="h-4 w-4 text-indigo-300 dark:text-indigo-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What it demonstrates */}
        <section className="py-20 bg-gradient-to-b from-white to-indigo-50/40 dark:from-[#080a12] dark:to-[#0b0f1e]">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              What the deployment demonstrates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {demonstrates.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-4 py-3"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-300" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance testing */}
        <section className="py-20 bg-white dark:bg-[#080a12]">
          <div className="container mx-auto px-6">
            {SHOW_BENCHMARK ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
                  Benchmark
                </h2>
                <div className="max-w-2xl rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden">
                  <dl className="divide-y divide-slate-100 dark:divide-white/5">
                    {benchmark.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between px-5 py-3.5 font-mono text-sm bg-white dark:bg-white/[0.03]"
                      >
                        <dt className="text-slate-500 dark:text-slate-400">
                          {row.label}
                        </dt>
                        <dd className="text-slate-900 dark:text-white">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                  Performance testing
                </h2>
                <div className="max-w-2xl rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.03] p-6">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Real serving, latency, throughput, concurrency, and GPU
                    measurements from the Kaironovas Engineering Lab will be
                    published with the completed technical case study.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Deployment Evidence */}
        <section className="py-20 bg-gradient-to-b from-indigo-50/40 to-white dark:from-[#0b0f1e] dark:to-[#080a12]">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Deployment Evidence
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
              Real captures from the Kaironovas Engineering Lab deployment will be
              added to these slots. Nothing here is simulated.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {screenshots.map((label) => (
                // TODO: Replace this placeholder slot with a real <Image /> capture.
                <figure
                  key={label}
                  className="overflow-hidden rounded-2xl border border-dashed border-slate-300 dark:border-white/15 bg-white dark:bg-white/[0.03]"
                >
                  <div className="flex aspect-video flex-col items-center justify-center text-center px-4">
                    <ImageOff className="h-6 w-6 text-slate-300 dark:text-slate-600 mb-3" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {label}
                    </span>
                    <span className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      Engineering Lab artifact to be added
                    </span>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 bg-[#0b0f1e] text-white">
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/25 blur-3xl" />
          <div className="relative container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Want this inside your environment?
            </h2>
            <p className="mx-auto max-w-xl text-slate-300 mb-8">
              Start with an AI Infrastructure Review and we&apos;ll assess how a
              deployment like this fits your architecture and data.
            </p>
            <Button size="xl" variant="gradient" className="group shadow-lg shadow-indigo-600/30" asChild>
              <Link href="/#contact">
                Get an AI Infrastructure Review
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
