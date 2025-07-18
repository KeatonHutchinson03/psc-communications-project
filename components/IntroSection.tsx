// components/IntroSection.tsx
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">Initiative</h1>
      <div className="mb-4 flex justify-center">
        <Image
          src="/static/images/BigPSClogo.png"
          alt="PSC Logo"
          width={384} // 2 inches wide at 96 DPI
          height={128} // adjust to keep aspect ratio (example)
          priority
        />
      </div>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        The Pittsburgh Supercomputing Center (PSC) accelerates discovery through advanced research
        computing, empowering researchers locally and globally. With over 35 years as a national
        leader, PSC provides cutting-edge capabilities and outstanding user support to foster
        scientific innovation.
        <br />
        <br />
        PSC is proud to launch the <strong>PSC Impact Stories</strong> initiative - a series of
        short features highlighting how PSC’s computing resources have helped researchers solve
        real-world problems. Through collaboration, education, and advanced technology, PSC supports
        scientists at all stages of their journey, helping to push the boundaries of knowledge and
        create impactful solutions.
        <br />
        <br />
        Join us as we showcase these inspiring stories of discovery, innovation, and the
        transformative power of high-performance computing.
        <br />
        <br />
      </p>
      <div className="mb-4 flex justify-center">
        <Image
          src="/static/images/bridges-2.jpg"
          alt="Bridges-2"
          width={768} // 2 inches wide at 96 DPI
          height={256} // adjust to keep aspect ratio (example)
          priority
        />
      </div>
    </section>
  )
}
