import AvailabilityCalendar from './components/AvailabilityCalendar'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#qualifications', label: 'Qualifications' },
  { href: '#rates', label: 'Rates' },
  { href: '#availability', label: 'Availability' },
  { href: '#contact', label: 'Contact' },
]

const rates = [
  {
    title: 'Standard lesson',
    price: '£42',
    unit: 'per hour',
    detail: 'At my home studio in Wokingham or online via video call.',
    highlight: false,
  },
  {
    title: 'At your home',
    price: '£48',
    unit: 'per hour',
    detail: 'Within the Wokingham area — ideal for busy families and adult learners.',
    highlight: false,
  },
  {
    title: 'Block of 5 lessons',
    price: '£200',
    unit: 'five hours',
    detail: 'Pay upfront for five standard lessons and save £10 overall.',
    highlight: true,
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-navy-900">
      <header className="sticky top-0 z-50 border-b border-navy-800/10 bg-cream-50/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
          <a href="#" className="font-display text-xl font-semibold text-navy-900 md:text-2xl">
            Rob Stubbs
            <span className="block text-xs font-body font-medium tracking-widest text-gold-600 uppercase md:text-sm">
              French Tutor · Wokingham
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-800 transition hover:text-gold-600"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-cream-50 transition hover:bg-navy-800"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-navy-950 text-cream-50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.15),_transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-gold-500 uppercase">
              Private French tuition
            </p>
            <h1 className="font-display max-w-3xl text-4xl leading-tight font-semibold md:text-6xl">
              Confident French for school, exams, and life
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream-100/90 md:text-xl">
              I&apos;m Rob Stubbs, an experienced French tutor based in the Wokingham area. I
              help GCSE and A-Level students, adult learners, and families build real
              speaking confidence — with lessons tailored to how you learn best.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#availability"
                className="rounded-lg bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition hover:bg-gold-600"
              >
                View availability
              </a>
              <a
                href="#rates"
                className="rounded-lg border border-cream-100/30 px-6 py-3 text-sm font-semibold text-cream-50 transition hover:bg-white/10"
              >
                See rates
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-b border-cream-200 bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="font-display text-3xl font-semibold text-navy-900 md:text-4xl">
                About me
              </h2>
              <div className="mt-2 h-1 w-16 bg-gold-500" />
            </div>
            <div className="space-y-4 text-navy-800/90 leading-relaxed">
              <p>
                Bonjour — I&apos;m Rob, a Wokingham-based tutor with a genuine love for the
                French language and culture. After years of teaching in schools and
                tutoring privately, I know that progress comes from patience, structure,
                and plenty of conversation.
              </p>
              <p>
                Whether you&apos;re preparing for exams, returning to French after a break,
                or supporting a child through GCSE, I design each session around clear
                goals: stronger grammar, richer vocabulary, and the confidence to speak
                without freezing up.
              </p>
              <p>
                I cover Wokingham, Earley, Woodley, and nearby Berkshire communities, with
                online lessons available UK-wide.
              </p>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-20 border-b border-cream-200 py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="font-display text-3xl font-semibold text-navy-900 md:text-4xl">
              Teaching experience
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold-500" />
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: '12+ years in education',
                  body: 'Classroom teaching and one-to-one tuition across Key Stage 3, GCSE, and A-Level French.',
                },
                {
                  title: 'Exam-focused support',
                  body: 'Speaking prep, past-paper technique, and targeted revision for AQA and Edexcel specifications.',
                },
                {
                  title: 'All ages welcome',
                  body: 'From nervous Year 9 beginners to adults planning holidays or career moves in France.',
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-navy-800/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-display text-xl font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-800/80">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="qualifications"
          className="scroll-mt-20 border-b border-cream-200 bg-white py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="font-display text-3xl font-semibold text-navy-900 md:text-4xl">
              Qualifications
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold-500" />
            <dl className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  term: 'BA (Hons) French & European Studies',
                  desc: 'University of Leeds — language, literature, and translation.',
                },
                {
                  term: 'PGCE Secondary Modern Foreign Languages',
                  desc: 'Qualified teacher status with MFL specialism.',
                },
                {
                  term: 'DELF examiner training',
                  desc: 'Familiar with international proficiency frameworks and oral assessment.',
                },
                {
                  term: 'Enhanced DBS checked',
                  desc: 'Current clearance for work with children and vulnerable adults.',
                },
              ].map((row) => (
                <div
                  key={row.term}
                  className="rounded-xl bg-cream-100/80 p-5 border border-cream-200"
                >
                  <dt className="font-semibold text-navy-900">{row.term}</dt>
                  <dd className="mt-2 text-sm text-navy-800/80">{row.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="rates" className="scroll-mt-20 border-b border-cream-200 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="font-display text-3xl font-semibold text-navy-900 md:text-4xl">
              Rates
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold-500" />
            <p className="mt-4 max-w-2xl text-navy-800/80">
              Transparent pricing with no hidden fees. Invoices provided for block bookings.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {rates.map((rate) => (
                <article
                  key={rate.title}
                  className={`rounded-2xl p-6 ${
                    rate.highlight
                      ? 'border-2 border-gold-500 bg-navy-900 text-cream-50 shadow-xl'
                      : 'border border-navy-800/10 bg-white shadow-sm'
                  }`}
                >
                  <h3
                    className={`font-display text-xl font-semibold ${
                      rate.highlight ? 'text-gold-500' : 'text-navy-900'
                    }`}
                  >
                    {rate.title}
                  </h3>
                  <p className="mt-4">
                    <span className="font-display text-4xl font-bold">{rate.price}</span>
                    <span
                      className={`ml-2 text-sm ${rate.highlight ? 'text-cream-100/80' : 'text-navy-700/70'}`}
                    >
                      {rate.unit}
                    </span>
                  </p>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      rate.highlight ? 'text-cream-100/85' : 'text-navy-800/80'
                    }`}
                  >
                    {rate.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="availability"
          className="scroll-mt-20 border-b border-cream-200 bg-white py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="font-display text-3xl font-semibold text-navy-900 md:text-4xl">
              Availability
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold-500" />
            <p className="mt-4 max-w-2xl text-navy-800/80">
              Typical teaching hours are weekday mornings and afternoons, plus Saturday
              mornings. Slots update regularly — select a time below to start your booking.
            </p>
            <div className="mt-10">
              <AvailabilityCalendar />
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-navy-950 py-16 text-cream-50 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Contact</h2>
            <div className="mt-2 h-1 w-16 bg-gold-500" />
            <p className="mt-6 max-w-xl text-cream-100/90">
              Ready to improve your French? Send me a message with your level, goals, and
              preferred lesson times. I usually reply within one working day.
            </p>
            <a
              href="mailto:rob.stubbs@example.com"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-bold text-navy-950 transition hover:bg-gold-600"
            >
              rob.stubbs@example.com
            </a>
            <p className="mt-8 text-sm text-cream-100/60">
              Wokingham, Berkshire · Online lessons available
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-navy-800/20 bg-navy-900 py-8 text-center text-sm text-cream-100/60">
        <p>© {new Date().getFullYear()} Rob Stubbs French Tutoring. All rights reserved.</p>
      </footer>
    </div>
  )
}
