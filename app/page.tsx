import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative w-full h-[600px]">
        <Image
          src="/house.png"
          alt="house"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Header */}
        <div className="absolute top-6 left-6 text-white text-xl font-[var(--font-mono)]">
          House
        </div>

        <div className="absolute top-6 right-6 text-white text-3xl font-[var(--font-mono)] cursor-pointer">
          ☰
        </div>

        {/* Hero text */}
        <div className="absolute right-10 top-1/3 text-white max-w-[350px] font-[var(--font-mono)]">
          <h2 className="text-[34px] font-medium text-primary-foreground leading-tight mb-6">
            Unika hus i en unik miljö
          </h2>
          <p className="text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse eu
            tortor eu odio dapibus molestie nec quis ipsum.
          </p>
          <button className="bg-[#1e1e1e] text-white py-2.5 px-5 text-sm font-[var(--font-sans)]">
            LÄS MER
          </button>
        </div>
      </section>

      {/* DARK TEXT SECTION */}
      <section className="bg-[#2B2B2B] text-white px-10 py-16">
        <h2 className="text-3xl mb-6">Lorem ipsum dolor</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 leading-6 text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse eu
            odio.
          </p>
          <p>
            dapibus molestie nec quis ipsum. Pellentesque pretium finibus
            vulputate. Praesent et urna ultricies, varius ipsum eget, iaculis
            ante. Pellentesque quis mi tempus elit lobortis cursus. Etiam vel
            sollicitudin elit, nec fringilla nibh. Aenean convallis enim justo,
            nec lobortis velit molestie vitae. Integer ac erat iaculis, blandit
            orci fermentum, ullamcorper augue. Suspendisse vel massa
            sollicitudin, varius lectus eu, rhoncus nisi. Fusce ullamcorper diam
            at lectus cursus efficitur.
          </p>
          <p>
            Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam
            rhoncus quam metus, id bibendum justo ultricies et. Integer nec nisl
            turpis. Nunc eget pulvinar urna. Duis mattis porttitor semper. Nam
            sollicitudin odio et urna consectetur, dignissim tempor eros
            dapibus. Duis a tortor et mauris egestas interdum. Vivamus sed
            tortor ultricies, efficitur diam et, pulvinar ligula. Ut ac rhoncus
            erat, eget rhoncus neque. Fusce eu fermentum est. Nam fermentum
            tincidunt est, eget tempus ex convallis nec. Ut felis nulla,
            consequat ac lorem quis, dapibus cursus magna. Nunc sed lacus
            nuleros.
          </p>
        </div>
      </section>

      {/* IMAGE CARDS */}
      <section className="px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CARD 1 */}
        <div>
          <p className="text-white bg-black/60 px-2 py-1 inline-block mb-2 font-[var(--font-mono)]">
            Våra hus
          </p>

          <div className="relative border border-blue-400 h-64">
            <Image
              src="/house.png"
              alt="House 1"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <button className="mt-4 bg-white px-5 py-2 text-sm font-[var(--font-sans)]">
            VÅRA HUS
          </button>
        </div>

        {/* CARD 2 */}
        <div>
          <p className="text-white bg-black/60 px-2 py-1 inline-block mb-2 font-[var(--font-mono)]">
            Tillval
          </p>

          <div className="relative border border-gray-400 h-64">
            <Image
              src="/house.png"
              alt="House 2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <button className="mt-4 bg-white px-5 py-2 text-sm font-[var(--font-sans)]">
            LÄS MER
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[#111] text-white px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-2 mt-4 font-[var(--font-sans)]">
            <p>Våra hus</p>
            <p>Tillval</p>
            <p>Hållbarhet</p>
          </div>

          <div className="flex flex-col gap-4 text-footer-foreground/80 text-[15px] max-w-xs text-left font-dm-sans md:ml-auto">
            <p>
              Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam
              rhoncus quam metus, id bibendum justo ultricies et. Integer nec
              nisl turpis. Nunc eget pulvinar urna.
            </p>
          </div>
        </div>

        <div className="m-35"></div>

        {/* Big background word */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] overflow-hidden pointer-events-none select-none">
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%] text-[120px] md:text-[200px] lg:text-[280px] font-dm-sans text-white/[0.07] uppercase tracking-wider whitespace-nowrap">
            House
          </span>
        </div>
      </footer>
    </main>
  );
}
