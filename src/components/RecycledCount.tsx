import { motion } from 'framer-motion'
import { ArrowUpRight, Award, Recycle } from 'lucide-react'
import NumberTicker from './ui/number-ticker'
import partnersData from '@/data/partners.json'
import BlurIn from './ui/blur-in'

function RecycledCount() {
  return (
    <section className="bg-[#e9faed] px-4 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-lime-700">Our impact</p>
          <BlurIn once margin="-80px" className="mt-3 text-5xl font-black tracking-tight text-slate-900 sm:text-7xl">
            Progress you can count.
          </BlurIn>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light leading-relaxed text-slate-600">
            Every collected ball and every award moves the circular future of tennis a little closer.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="relative flex min-h-[26rem] flex-col overflow-hidden rounded-[2rem] border border-emerald-200/80 bg-white p-7 shadow-[0_18px_60px_rgba(22,101,52,0.08)] sm:p-10"
          >
            <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full border-[52px] border-emerald-100" />
            <div className="relative flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Balls recycled</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Recycle className="h-5 w-5" />
              </span>
            </div>

            <div className="relative mt-auto">
              <div className="whitespace-nowrap text-6xl font-black leading-none tracking-[-0.06em] text-slate-900 sm:text-8xl lg:text-[6.6rem]">
                <NumberTicker value={510000} className="tracking-[-0.06em] text-slate-900" />
                <span className="text-emerald-500">+</span>
              </div>
              <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-slate-600 sm:text-lg">
                Used tennis balls diverted from landfills and given a meaningful next life.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative flex min-h-[26rem] flex-col overflow-hidden rounded-[2rem] bg-lime-400 p-7 text-slate-950 shadow-[0_18px_60px_rgba(77,124,15,0.16)] sm:p-10"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20" />
            <div className="relative flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-lime-950/70">Funding recognized</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-lime-300">
                <Award className="h-5 w-5" />
              </span>
            </div>

            <div className="relative mt-auto">
              <div className="whitespace-nowrap text-6xl font-black leading-none tracking-[-0.06em] sm:text-7xl lg:text-[5.25rem]">
                <span>$</span>
                <NumberTicker value={5500} delay={0.1} className="tracking-[-0.06em] text-slate-950" />
                <span>+</span>
              </div>
              <p className="mt-5 text-base font-medium leading-relaxed text-lime-950/75">
                Across two awards celebrating sustainability and student innovation.
              </p>
              <a
                href="/awards/"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-slate-800"
              >
                See the recognition <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        </div>

        <div className="mt-28 border-t border-emerald-900/10 pt-20">
          <BlurIn once margin="-100px" className="mb-10 text-center text-3xl font-bold text-slate-800 sm:text-5xl">
            Our Partners
          </BlurIn>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap">
              {partnersData.map((partner: { href: string | undefined; imgSrc: string | undefined; alt: string | undefined }) => (
                <a key={partner.href} href={partner.href} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    className="flex h-40 w-80 items-center justify-center rounded-2xl bg-white shadow-md"
                    whileHover={{ scale: 1.04, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <img src={partner.imgSrc} alt={partner.alt} className="max-h-full max-w-full p-2" />
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RecycledCount
