import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, CircleDollarSign, Leaf } from 'lucide-react'
import { awards } from '@/data/awards'
import NumberTicker from './ui/number-ticker'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65 },
}

function AwardsPage() {
  return (
    <main className="overflow-hidden bg-[#f7fbf4] text-slate-900">
      <section className="border-b border-emerald-900/10 bg-[#f3f8ed] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_.78fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-lime-700">Recognition · 2025</p>
            <h1 className="max-w-3xl text-6xl font-black leading-[0.96] tracking-[-0.05em] text-slate-900 sm:text-7xl lg:text-[5.5rem]">
              Awards &amp; funding
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Recognition for AceCycle&apos;s work in sustainability and student entrepreneurship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative py-4 text-slate-950 lg:py-8 lg:pl-12"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-800">Funding recognized</p>
            <p className="mt-4 whitespace-nowrap text-7xl font-black tracking-[-0.07em] sm:text-8xl">
              $<NumberTicker value={5500} delay={0.1} className="tracking-[-0.07em] text-slate-950" />
              <span className="text-lime-500">+</span>
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-emerald-900/15 pt-6 text-sm font-semibold text-slate-600">
              <span>2 distinctions</span>
              <span className="text-right">2025 awards</span>
            </div>
          </motion.div>
        </div>

        <a href="#recognition" className="group mx-auto mt-20 flex w-fit items-center gap-2.5 rounded-full border border-lime-600/15 bg-white/55 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-lime-500/30 hover:bg-white/75">
          Explore the recognition
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-200/80 text-lime-800 transition-transform group-hover:translate-y-0.5">
            <ArrowDown className="h-3.5 w-3.5" />
          </span>
        </a>
      </section>

      <section id="recognition" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="mb-14 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-700">The recognition</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Two milestones.<br />One shared mission.</h2>
            </div>
            <p className="max-w-xl text-lg font-light leading-relaxed text-slate-600 lg:justify-self-end">
              Each award validates a different part of the work: the people driving the mission and the ideas expanding what circular design can become.
            </p>
          </motion.div>

          <div className="space-y-10">
            {awards.map((item, index) => (
              <motion.article
                key={item.title}
                {...reveal}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group grid overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_18px_70px_rgba(15,23,42,0.08)] lg:grid-cols-2"
              >
                <div className={`relative min-h-[34rem] overflow-hidden bg-slate-100 sm:min-h-[42rem] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="absolute inset-0 h-full w-full object-contain object-top transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/45 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-bold uppercase tracking-[0.15em] text-white">
                    <span>Official announcement</span>
                    <span>0{index + 1}</span>
                  </div>
                </div>

                <div className="flex min-h-[30rem] flex-col p-8 sm:p-12 lg:p-14">
                  <div className="flex items-start justify-between gap-5">
                    <span className="rounded-full bg-lime-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-lime-800">
                      {item.label}
                    </span>
                    <CircleDollarSign className="h-7 w-7 text-lime-500" strokeWidth={1.7} />
                  </div>
                  <p className="mt-10 text-6xl font-black tracking-[-0.06em] text-lime-600 sm:text-7xl">{item.amount}</p>
                  <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{item.title}</h3>
                  <div className="mt-7 h-px w-16 bg-lime-300" />
                  <p className="mt-7 text-lg font-bold text-slate-800">{item.recipient}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.meta}</p>
                  <p className="mt-6 text-base font-light leading-relaxed text-slate-600">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-8 font-bold text-lime-700 transition-colors hover:text-lime-900"
                  >
                    Read the official announcement
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <motion.div {...reveal} className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-lime-400 px-8 py-14 sm:px-14 lg:flex lg:items-center lg:justify-between lg:px-20 lg:py-20">
          <Leaf className="absolute -bottom-14 -right-8 h-64 w-64 rotate-[-18deg] text-lime-500/60" strokeWidth={1} />
          <div className="relative max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-950/65">What recognition fuels</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl">More momentum for a world beyond tennis-ball waste.</h2>
          </div>
          <a href="/about/#startchapter" className="relative mt-10 inline-flex rounded-full bg-slate-950 px-7 py-4 font-bold text-white shadow-xl transition-transform hover:-translate-y-1 lg:ml-10 lg:mt-0 lg:shrink-0">
            Join the movement
          </a>
        </motion.div>
      </section>
    </main>
  )
}

export default AwardsPage
