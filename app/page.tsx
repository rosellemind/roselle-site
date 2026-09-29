"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
   
  return (
    <main className="min-h-screen bg-[#f5f1ec] text-[#241f1f]">

      {/* =========================
          HERO
      ========================= */}

      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 py-8 sm:px-10 lg:px-16"
      >

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />

        {/* Cool neutral overlay */}
        <div className="absolute inset-0 bg-[#e8ecec]/25" />

        {/* Soft veil */}
        <div className="absolute inset-0 bg-white/10" />

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex items-center justify-between"
        >
          <div className="text-sm font-medium tracking-[0.28em] text-[#4A1822]">
            ROSELLE
          </div>

          <div className="hidden items-center gap-10 text-[10px] uppercase tracking-[0.24em] text-[#625c59] sm:flex">
            <a href="#work" className="transition-opacity hover:opacity-50">
              Work
            </a>

            <a href="#about" className="transition-opacity hover:opacity-50">
              About
            </a>

            <a href="#notes" className="transition-opacity hover:opacity-50">
              Notes
            </a>

            <a href="#contact" className="transition-opacity hover:opacity-50">
              Contact
            </a>
          </div>

          <motion.div
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2 w-2 rounded-full bg-[#4A1822]"
          />
        </motion.nav>


        {/* Hero Content */}
        <div className="relative z-10 flex flex-1 items-center">

          <div className="w-full">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >

              <div
            className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#756d69]"
> 
             <span>Quality</span>
             <span>·</span>
             <span>Projects</span>
             <span>·</span>
             <span>Curiosity</span>
             </div>


            <h1
  className="font-serif text-[clamp(4.5rem,13vw,11rem)] font-normal leading-[0.78] tracking-[-0.055em] text-[#4A1822]"
>
  ROSELLE
</h1>
              

            <div
  className="mt-12 grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end"
>

                <div>

                  <p className="max-w-2xl font-serif text-2xl leading-[1.35] text-[#282323] sm:text-3xl">
                    I look for what goes wrong.
                    <br />

                    <span className="italic text-[#4A1822]">
                      Then I ask why.
                    </span>
                  </p>

                  <p className="mt-7 max-w-lg text-[11px] uppercase leading-6 tracking-[0.18em] text-[#756d69]">
                    Quality management · Automotive · Projects · Things I’m curious about
                  </p>

                </div>


                <div className="flex items-center gap-4 pb-1">

                  <div className="h-px w-16 bg-[#8B7773]" />

                  <span className="font-serif text-xl italic text-[#4A1822]">
                    curious, always.
                  </span>

                </div>

              </div>

            </motion.div>

          </div>

        </div>


        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="relative z-10 flex items-end justify-between border-t border-[#BDB5B0]/70 pt-5 text-[10px] uppercase tracking-[0.24em] text-[#756d69]"
        >
          <span>© 2026 Roselle</span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#4A1822]"
          >
            ↓ &nbsp; Scroll to explore
          </motion.span>

        </motion.div>

      </section>


      {/* =========================
          QUALITY PROJECT
      ========================= */}

<section
  id="work"
  className="relative overflow-hidden bg-[#f5f1ec] px-6 py-32 text-[#241f1f] sm:px-10 lg:px-16"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

      {/* LEFT — typography */}
      <div className="lg:pr-10">

        <p className="mb-10 text-[10px] uppercase tracking-[0.3em] text-[#817a76]">
          01 — Quality / Automotive
        </p>

        <h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
          I look for
          <br />
          what goes
          <br />
          <span className="italic text-[#6b2635]">
            wrong.
          </span>
        </h2>

        <p className="mt-10 max-w-md text-sm leading-7 text-[#817a76]">
          Quality management taught me to slow down,
          reproduce the problem, and understand what
          actually caused it.
        </p>

        <div className="mt-12 flex items-center gap-4">
          <div className="h-px w-12 bg-[#8b7773]" />

          <span className="font-serif text-lg italic text-[#6b2635]">
            then I ask why.
          </span>
        </div>

      </div>


      {/* RIGHT — 2 × 2 cards */}
      <div className="grid gap-5 sm:grid-cols-2">

        {/* 01 */}
        <motion.div
          whileHover={{
            y: -10,
            rotate: -0.5,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className="group min-h-[270px] border border-[#cfc7c0] bg-[#ebe6e0] p-7 shadow-[0_12px_35px_rgba(50,40,35,0.05)] sm:p-8"
        >
          <div className="flex h-full flex-col justify-between">

            <div className="flex justify-between">
              <span className="text-[10px] tracking-[0.25em] text-[#817a76]">
                01
              </span>

              <span className="text-xs text-[#817a76] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>

            <div>
              <h3 className="font-serif text-4xl tracking-[-0.04em]">
                Reproduce
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#6f6864]">
                Reproduce the failure before trying
                to fix it.
              </p>
            </div>

          </div>
        </motion.div>


        {/* 02 */}
        <motion.div
          whileHover={{
            y: -12,
            rotate: 0.5,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className="group min-h-[270px] translate-y-6 border border-[#cfc7c0] bg-[#f8f5f1] p-7 shadow-[0_12px_35px_rgba(50,40,35,0.05)] sm:p-8"
        >
          <div className="flex h-full flex-col justify-between">

            <div className="flex justify-between">
              <span className="text-[10px] tracking-[0.25em] text-[#817a76]">
                02
              </span>

              <span className="text-xs text-[#817a76] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>

            <div>
              <h3 className="font-serif text-4xl tracking-[-0.04em]">
                Investigate
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#6f6864]">
                Find the root cause through evidence,
                measurement, and analysis.
              </p>
            </div>

          </div>
        </motion.div>


        {/* 03 */}
        <motion.div
          whileHover={{
            y: -10,
            rotate: -0.4,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className="group min-h-[270px] border border-[#cfc7c0] bg-[#f8f5f1] p-7 shadow-[0_12px_35px_rgba(50,40,35,0.05)] sm:p-8"
        >
          <div className="flex h-full flex-col justify-between">

            <div className="flex justify-between">
              <span className="text-[10px] tracking-[0.25em] text-[#817a76]">
                03
              </span>

              <span className="text-xs text-[#817a76] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>

            <div>
              <h3 className="font-serif text-4xl tracking-[-0.04em]">
                Improve
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#6f6864]">
                Turn the root cause into a concrete
                engineering improvement.
              </p>
            </div>

          </div>
        </motion.div>


        {/* 04 */}
        <motion.div
          whileHover={{
            y: -14,
            rotate: 0.4,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className="group min-h-[270px] translate-y-6 border border-[#cfc7c0] bg-[#ebe6e0] p-7 shadow-[0_12px_35px_rgba(50,40,35,0.05)] sm:p-8"
        >
          <div className="flex h-full flex-col justify-between">

            <div className="flex justify-between">
              <span className="text-[10px] tracking-[0.25em] text-[#817a76]">
                04
              </span>

              <span className="text-xs text-[#817a76] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>

            <div>
              <h3 className="font-serif text-4xl tracking-[-0.04em]">
                Control
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#6f6864]">
                Make the improvement repeatable through
                FMEA and control plans.
              </p>
            </div>

          </div>
        </motion.div>

      </div>

    </div>


    {/* bottom line */}
    <div className="mt-24 flex flex-col gap-4 border-t border-[#cfc7c0] pt-5 text-[10px] uppercase tracking-[0.2em] text-[#817a76] sm:flex-row sm:justify-between">
      <span>8D · Root Cause · FMEA · Control Plan</span>

      <span className="text-[#6b2635]">
        From failure to control
      </span>
    </div>

  </div>
</section>
{/* =========================
    BEYOND QUALITY
========================= */}

<section
  id="about"
  className="relative overflow-hidden bg-[#191515] px-6 py-32 text-[#f5f1ec] sm:px-10 lg:px-16"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

      {/* LEFT */}
      <div className="lg:sticky lg:top-24">

        <p className="mb-10 text-[10px] uppercase tracking-[0.3em] text-[#9d9590]">
          02 — Beyond Quality
        </p>

        <h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[6.2rem]">
          I started
          <br />
          looking
          <br />
          <span className="italic text-[#b87882]">
            beyond.
          </span>
        </h2>

        <p className="mt-10 max-w-md text-sm leading-7 text-[#a9a19c]">
          Quality taught me how to understand problems.
          Other experiences taught me to understand people,
          users, and the space between an idea and reality.
        </p>

      </div>


      {/* RIGHT */}
      <div className="space-y-6">

        {/* YONSEI */}
        <motion.div
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 20,
          }}
          className="group border border-[#403938] bg-[#211c1c] p-8 sm:p-10"
        >
          <div className="flex items-start justify-between">

            <span className="text-[10px] tracking-[0.25em] text-[#8d8580]">
              01
            </span>

            <span className="text-[#8d8580] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>

          </div>

          <div className="mt-20">

            <p className="text-[10px] uppercase tracking-[0.25em] text-[#b87882]">
              Yonsei University
            </p>

            <h3 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              Entrepreneurship
              <br />
              & Management
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#9d9590]">
              A summer program that moved me outside
              the familiar language of quality management —
              into entrepreneurship, business, and decision-making.
            </p>

          </div>

          <div className="mt-10 border-t border-[#403938] pt-4 text-[10px] uppercase tracking-[0.2em] text-[#716965]">
            2026 · Summer Program
          </div>

        </motion.div>


        {/* LOCOMON */}
        <motion.div
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 20,
          }}
          className="group border border-[#403938] bg-[#f5f1ec] p-8 text-[#241f1f] sm:p-10"
        >
          <div className="flex items-start justify-between">

            <span className="text-[10px] tracking-[0.25em] text-[#817a76]">
              02
            </span>

            <span className="text-[#817a76] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>

          </div>

          <div className="mt-20">

            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6b2635]">
              LOCOMON
            </p>

            <h3 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              User Growth
              <br />
              Strategy
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#6f6864]">
              In a residential community of around 800 households,
              we explored how trust, reach, and everyday use
              could shape user adoption.
            </p>

          </div>

          <div className="mt-10 border-t border-[#d2cbc5] pt-4 text-[10px] uppercase tracking-[0.2em] text-[#817a76]">
            User Adoption · Community Strategy
          </div>

        </motion.div>


        {/* PEOPLE / PROJECTS */}
        <motion.div
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 20,
          }}
          className="group border border-[#403938] bg-[#211c1c] p-8 sm:p-10"
        >
          <div className="flex items-start justify-between">

            <span className="text-[10px] tracking-[0.25em] text-[#8d8580]">
              03
            </span>

            <span className="text-[#8d8580] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>

          </div>

          <div className="mt-20">

            <p className="text-[10px] uppercase tracking-[0.25em] text-[#b87882]">
              People · Projects · Chaos
            </p>

            <h3 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              Not everything
              <br />
              fits a category.
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#9d9590]">
              From coordinating tickets for 100 people
              to creating content that reached millions of views,
              some of my most memorable projects happened
              far outside a job description.
            </p>

          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#403938] pt-4 text-[10px] uppercase tracking-[0.2em] text-[#716965]">
            <span>100 people</span>
            <span>6 hours</span>
            <span>4M views</span>
            <span>300K likes</span>
          </div>

        </motion.div>

      </div>

    </div>

  </div>
</section>

{/* =========================
    SELECTED WORK
========================= */}

<section
  id="projects"
  className="relative overflow-hidden bg-[#f5f1ec] px-6 py-32 text-[#241f1f] sm:px-10 lg:px-16"
>
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="flex flex-col justify-between gap-8 border-b border-[#d8d0ca] pb-12 lg:flex-row lg:items-end">
      <div>
        <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#817a76]">
          03 — Selected Work
        </p>

        <h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[7rem]">
          Things
          <br />
          I&apos;ve
          <br />
          <span className="italic text-[#6b2635]">worked on.</span>
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-7 text-[#817a76] lg:pb-2">
        Projects that sit somewhere between
        quality, research, coordination,
        and making things happen.
      </p>
    </div>


    {/* PROJECT GRID */}
    <div className="mt-16 grid gap-6 lg:grid-cols-12">

      {/* PROJECT 01 — AUTOMOTIVE */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 20,
        }}
        className="group relative overflow-hidden bg-[#191515] text-[#f5f1ec] lg:col-span-7"
      >
        <div className="flex min-h-[560px] flex-col justify-between p-8 sm:p-10 lg:p-12">

          <div className="flex items-start justify-between">
            <span className="text-[10px] tracking-[0.25em] text-[#8d8580]">
              01
            </span>

            <span className="text-[#8d8580] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#b87882]">
              Automotive · Quality Improvement
            </p>

            <h3 className="mt-5 max-w-2xl font-serif text-4xl leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Center Console
              <br />
              Armrest Quality
              <br />
              Improvement
            </h3>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#9d9590]">
              From abnormal opening and closing behavior
              to failure reproduction, root-cause analysis,
              dimensional measurement, and validation.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "8D",
                "Root Cause",
                "FMEA",
                "Control Plan",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-[#403938] px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-[#9d9590]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-10 translate-y-10 rounded-full border border-[#6b2635] opacity-40 transition-transform duration-700 group-hover:scale-150" />
      </motion.div>


      {/* PROJECT 02 — LOCOMON */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 20,
        }}
        className="group relative overflow-hidden border border-[#d8d0ca] bg-[#e8e1da] lg:col-span-5"
      >
        <div className="flex min-h-[560px] flex-col justify-between p-8 sm:p-10">

          <div className="flex items-start justify-between">
            <span className="text-[10px] tracking-[0.25em] text-[#817a76]">
              02
            </span>

            <span className="text-[#817a76] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6b2635]">
              LOCOMON · User Growth
            </p>

            <h3 className="mt-5 font-serif text-4xl leading-[0.95] tracking-[-0.04em] sm:text-5xl">
              How do you
              <br />
              get people
              <br />
              to care?
            </h3>

            <p className="mt-7 text-sm leading-7 text-[#6f6864]">
              A user growth strategy project
              built around a residential community
              of around 800 households.
            </p>

            <div className="mt-10 border-t border-[#cfc6be] pt-5">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-serif text-3xl">800</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#817a76]">
                    Households
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl">01</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#817a76]">
                    Strategy
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl">∞</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#817a76]">
                    Questions
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>


      {/* PROJECT 03 — OTHER WORK */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 20,
        }}
        className="group relative overflow-hidden bg-[#6b2635] text-[#f5f1ec] lg:col-span-12"
      >
        <div className="grid min-h-[360px] gap-12 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">

          <div>
            <div className="flex items-start justify-between lg:hidden">
              <span className="text-[10px] tracking-[0.25em] text-[#d5b9bd]">
                03
              </span>

              <span className="text-[#d5b9bd]">
                ↗
              </span>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-[#d5b9bd]">
              Side Projects · People · Media
            </p>

            <h3 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              The projects
              <br />
              that don&apos;t
              <br />
              fit the résumé.
            </h3>
          </div>

          <div className="max-w-sm lg:text-right">
            <p className="text-sm leading-7 text-[#eadcdf]">
              Concert ticket coordination,
              short-form content,
              photography, and other small
              experiments that became memorable
              projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 lg:justify-end">
              <span className="border border-[#a96b76] px-3 py-2 text-[9px] uppercase tracking-[0.18em]">
                100 people
              </span>

              <span className="border border-[#a96b76] px-3 py-2 text-[9px] uppercase tracking-[0.18em]">
                4M views
              </span>

              <span className="border border-[#a96b76] px-3 py-2 text-[9px] uppercase tracking-[0.18em]">
                300K likes
              </span>
            </div>
          </div>

        </div>

        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#a96b76] opacity-40 transition-transform duration-700 group-hover:scale-125" />
      </motion.div>

    </div>


    {/* FOOTER LINE */}
    <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#d8d0ca] pt-5 text-[10px] uppercase tracking-[0.2em] text-[#817a76] sm:flex-row">
      <span>Selected work · 2025 — 2026</span>
      <span>Quality · Strategy · Curiosity</span>
    </div>

  </div>
</section>
{/* =========================
    HOW I WORK
========================= */}

<section
  id="about-me"
  className="relative overflow-hidden bg-[#f5f1ec] px-6 py-32 text-[#241f1f] sm:px-10 lg:px-16"
>
  <div className="mx-auto max-w-7xl">

    {/* TOP */}
    <div className="grid gap-12 border-b border-[#d8d0ca] pb-16 lg:grid-cols-[0.8fr_1.2fr]">

      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#817a76]">
          04 — How I Work
        </p>
      </div>

      <div>
        <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-[5.5rem]">
          Curious about
          <br />
          <span className="italic text-[#6b2635]">
            how things work.
          </span>
        </h2>
      </div>

    </div>


    {/* MIDDLE */}
    <div className="grid gap-16 py-20 lg:grid-cols-[0.8fr_1.2fr]">

      {/* LEFT */}
      <div className="lg:sticky lg:top-24 lg:self-start">

        <p className="max-w-sm text-sm leading-7 text-[#6f6864]">
          I like work that asks me to look closer —
          whether that means finding a root cause,
          understanding a user, coordinating people,
          or turning a messy idea into something real.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-12 bg-[#6b2635]" />
          <span className="font-serif text-lg italic text-[#6b2635]">
            keep looking.
          </span>
        </div>

      </div>


      {/* RIGHT */}
      <div className="divide-y divide-[#d8d0ca]">

        {/* 01 */}
        <motion.div
          whileHover={{ x: 8 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
          className="group grid gap-6 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-start"
        >
          <span className="text-[10px] tracking-[0.25em] text-[#817a76]">
            01
          </span>

          <div>
            <h3 className="font-serif text-3xl tracking-[-0.035em] sm:text-4xl">
              Slow down.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#817a76]">
              Before solving a problem, I want to understand
              what is actually happening.
            </p>
          </div>

          <span className="hidden text-[#6b2635] transition-transform duration-300 group-hover:translate-x-1 sm:block">
            ↗
          </span>
        </motion.div>


        {/* 02 */}
        <motion.div
          whileHover={{ x: 8 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
          className="group grid gap-6 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-start"
        >
          <span className="text-[10px] tracking-[0.25em] text-[#817a76]">
            02
          </span>

          <div>
            <h3 className="font-serif text-3xl tracking-[-0.035em] sm:text-4xl">
              Ask why.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#817a76]">
              Reproduce the issue, trace the variables,
              and keep asking until the cause becomes clear.
            </p>
          </div>

          <span className="hidden text-[#6b2635] transition-transform duration-300 group-hover:translate-x-1 sm:block">
            ↗
          </span>
        </motion.div>


        {/* 03 */}
        <motion.div
          whileHover={{ x: 8 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
          className="group grid gap-6 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-start"
        >
          <span className="text-[10px] tracking-[0.25em] text-[#817a76]">
            03
          </span>

          <div>
            <h3 className="font-serif text-3xl tracking-[-0.035em] sm:text-4xl">
              Make it useful.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#817a76]">
              A good solution should not only fix the problem —
              it should make the next step easier to control.
            </p>
          </div>

          <span className="hidden text-[#6b2635] transition-transform duration-300 group-hover:translate-x-1 sm:block">
            ↗
          </span>
        </motion.div>


        {/* 04 */}
        <motion.div
          whileHover={{ x: 8 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
          className="group grid gap-6 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-start"
        >
          <span className="text-[10px] tracking-[0.25em] text-[#817a76]">
            04
          </span>

          <div>
            <h3 className="font-serif text-3xl tracking-[-0.035em] sm:text-4xl">
              Stay curious.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#817a76]">
              I do not want to stay inside one category.
              Different projects often reveal better questions.
            </p>
          </div>

          <span className="hidden text-[#6b2635] transition-transform duration-300 group-hover:translate-x-1 sm:block">
            ↗
          </span>
        </motion.div>

      </div>

    </div>


    {/* BOTTOM STATEMENT */}
    <div className="relative overflow-hidden bg-[#191515] px-8 py-14 text-[#f5f1ec] sm:px-12 sm:py-16">

      <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8d8580]">
            A small principle
          </p>

          <p className="mt-5 max-w-2xl font-serif text-4xl leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Understand first.
            <br />
            Improve second.
            <br />
            <span className="italic text-[#b87882]">
              Keep learning.
            </span>
          </p>
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] text-[#716965] lg:text-right">
          <p>Roselle</p>
          <p className="mt-2">Quality · Strategy · Curiosity</p>
        </div>

      </div>

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border border-[#6b2635] opacity-40" />

    </div>

  </div>
</section>

{/* =========================
    CONTACT / CLOSING
========================= */}

<section
  id="contact"
  className="relative flex min-h-[85vh] flex-col justify-between overflow-hidden bg-[#191515] px-6 py-10 text-[#f5f1ec] sm:px-10 lg:px-16"
>
  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#817a76]">
    <span>05 — Contact</span>
    <span>Roselle · 2026</span>
  </div>

  <div className="relative z-10 mx-auto w-full max-w-7xl py-24">

    <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-[#b87882]">
      If something here caught your attention
    </p>

    <h2 className="font-serif text-[4.5rem] leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-[9rem]">
      Let&apos;s
      <br />
      <span className="italic text-[#b87882]">
        talk.
      </span>
    </h2>

    <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">

      <motion.a
        href="mailto:ra2jeong@gmail.com"
        whileHover={{ y: -4 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="group inline-flex items-center gap-4 border-b border-[#5b5350] pb-3 text-sm text-[#d8d0ca] transition-colors hover:border-[#b87882] hover:text-[#f5f1ec]"
      >
        <span>ra2jeong@gmail.com</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/%E6%99%B6%E6%99%B6-%E7%BD%97-5ba012373/"
          target="_blank"
          rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="group inline-flex items-center gap-4 border-b border-[#5b5350] pb-3 text-sm text-[#d8d0ca] transition-colors hover:border-[#b87882] hover:text-[#f5f1ec]"
      >
        <span>LinkedIn</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </motion.a>

      <motion.a
        href="/Roselle_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="group inline-flex items-center gap-4 border-b border-[#5b5350] pb-3 text-sm text-[#d8d0ca] transition-colors hover:border-[#b87882] hover:text-[#f5f1ec]"
      >
        <span>Resume</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </motion.a>

    </div>

  </div>


  {/* DECORATIVE CIRCLE */}
  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    }}
    className="pointer-events-none absolute -right-40 top-1/2 h-[32rem] w-[32rem] rounded-full border border-[#403938]"
  />

  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      duration: 55,
      repeat: Infinity,
      ease: "linear",
    }}
    className="pointer-events-none absolute -right-24 top-[55%] h-[20rem] w-[20rem] rounded-full border border-[#6b2635] opacity-50"
  />


  {/* FOOTER */}
  <div className="relative z-10 flex flex-col justify-between gap-4 border-t border-[#403938] pt-5 text-[9px] uppercase tracking-[0.2em] text-[#716965] sm:flex-row">
    <span>Designed & built by Roselle</span>

    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-left transition-colors hover:text-[#f5f1ec] sm:text-right"
    >
      Back to top ↑
    </button>
  </div>

</section>

    </main>
  );
}
