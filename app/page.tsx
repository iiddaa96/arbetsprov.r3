import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <Image
          src="/house.png"
          alt="house"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Header */}
        <div
          style={{ fontFamily: "var(--font-sans)" }}
          className="absolute top-6 left-6 text-white text-5xl"
        >
          House
        </div>

        <div
          style={{ fontFamily: "var(--font-mono)" }}
          className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
        >
          ☰
        </div>

        {/* Hero Content */}
        <div className="relative z-[5] flex items-center justify-end min-h-screen px-6 md:px-16 lg:px-24">
          <div className="max-w-lg text-right md:text-left md:mr-0 lg:mr-12">
            <h2
              style={{ fontFamily: "var(--font-mono)" }}
              className="text-[34px] font-medium text-white leading-tight mb-6"
            >
              Unika hus i en unik miljö
            </h2>
            <p className="text-white mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button className="px-8 py-3 bg-[#2B2B2B] text-white font-dm-sans font-medium hover:bg-[#1c1b1b] transition-colors tracking-wider text-sm">
              LÄS MER
            </button>
          </div>
        </div>
      </section>

      {/* DARK TEXT SECTION */}
      <section className="bg-[#2B2B2B] text-white py-16 md:py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2
            style={{ fontFamily: "var(--font-mono)" }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-dark-section-foreground mb-6 text-center md:text-left"
          >
            Lorem ipsum dolor
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-dark-section-foreground/90 leading-relaxed">
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac erat tempor, fringilla nunc vitae, laoreet velit. Suspendisse
                eu odio.
              </p>
              <p>
                dapibus molestie nec quis ipsum. Pellentesque pretium finibus
                vulputate. Praesent et urna ultricies, varius ipsum eget,
                iaculis ante. Pellentesque quis mi tempus elit lobortis cursus.
                Etiam vel sollicitudin elit, nec fringilla nibh. Aenean
                convallis enim justo, nec lobortis velit molestie vitae. Integer
                ac erat iaculis, blandit orci fermentum, ullamcorper augue.
                Suspendisse vel massa sollicitudin, varius lectus eu, rhoncus
                nisi. Fusce ullamcorper diam at lectus cursus efficitur.
              </p>
            </div>

            <div className="text-dark-section-foreground/90 leading-relaxed">
              <p className="mb-4">
                Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam
                rhoncus quam metus, id bibendum justo ultricies et. Integer nec
                nisl turpis. Nunc eget pulvinar urna. Duis mattis porttitor
                semper. Nam sollicitudin odio et urna consectetur, dignissim
                tempor eros dapibus. Duis a tortor et mauris egestas interdum.
                Vivamus sed tortor ultricies, efficitur diam et, pulvinar
                ligula. Ut ac rhoncus erat, eget rhoncus neque. Fusce eu
                fermentum est. Nam fermentum tincidunt est, eget tempus ex
                convallis nec. Ut felis nulla, consequat ac lorem quis, dapibus
                cursus magna. Nunc sed lacus nuleros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE CARDS */}
      <section className="bg-background">
        <div className="w-full">
          <div className="grid md:grid-cols-2">
            {/* Card 1 */}
            <div className="relative group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/house.png"
                  alt="Våra hus"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                <h3
                  style={{ fontFamily: "var(--font-mono)" }}
                  className="text-lg md:text-xl text-white"
                >
                  Våra hus
                </h3>
                <div className="flex justify-end">
                  <button
                    style={{ fontFamily: "var(--font-mono)" }}
                    className="px-8 py-3 bg-primary-foreground bg-white text-black font-medium hover:bg-primary-foreground/90 transition-colors tracking-wider text-sm"
                  >
                    VÅRA HUS
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/house.png"
                  alt="Tillval"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                <h3
                  style={{ fontFamily: "var(--font-mono)" }}
                  className="text-lg md:text-xl text-white"
                >
                  Tillval
                </h3>
                <div className="flex justify-end">
                  <button
                    style={{ fontFamily: "var(--font-mono)" }}
                    className="px-8 py-3 bg-primary-foreground bg-white text-black font-medium hover:bg-primary-foreground/90 transition-colors tracking-wider text-sm"
                  >
                    LÄS MER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[#111] text-white px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            style={{ fontFamily: "var(--font-sans)" }}
            className="space-y-2 mt-4"
          >
            <p>Våra hus</p>
            <p>Tillval</p>
            <p>Hållbarhet</p>
          </div>

          <div
            style={{ fontFamily: "var(--font-sans)" }}
            className="flex flex-col gap-4 text-footer-foreground/80 text-[15px] max-w-xs text-left md:ml-auto"
          >
            <p>
              Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam
              rhoncus quam metus, id bibendum justo ultricies et. Integer nec
              nisl turpis. Nunc eget pulvinar urna.
            </p>
          </div>
        </div>

        <div className="m-35"></div>

        {/* Big background word */}
        <div
          style={{ fontFamily: "var(--font-sans)" }}
          className="absolute bottom-0 left-0 right-0 h-[60%] overflow-hidden pointer-events-none select-none"
        >
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%] text-[120px] md:text-[200px] lg:text-[280px] text-white/[0.07] uppercase tracking-wider whitespace-nowrap">
            House
          </span>
        </div>
      </footer>
    </main>
  );
}
