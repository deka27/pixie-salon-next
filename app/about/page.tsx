

export default function page() {
  return (
    <div>
      <div className="">
        <div>
          <video
            autoPlay loop muted playsInline preload="auto"
            className="w-full h-screen object-cover opacity-30 absolute"
          >
            <source src="/video/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="max-w-6xl h-screen mx-auto flex flex-col justify-center items-center relative z-5 p-6">
          <div className="text-2xl md:text-4xl lg:text-7xl font-semibold mt-4">Pixie Unisex Salon & Spa</div>
          <div className="my-6 text-center text-sm p-4 tracking-tight md:text-lg">
            Welcome to Pixie, where beauty meets history and vision blends
            seamlessly with artistry. We started our journey in 2010, Pixie
            Beauty Salon has been a beloved pillar of our community. Our journey
            began with a simple yet powerful vision: to create a haven where
            every individual&apos;s unique beauty could flourish. Over the
            years, Pixie has evolved into an emblem of excellence in the beauty
            industry, continuously setting new standards in innovation and
            personalized care. Our team of passionate and highly-trained
            professionals is committed to making your beauty aspirations come to
            life, whether it&apos;s through cutting-edge treatments,
            trendsetting styles, or classic elegance. At Pixie, we understand
            that true beauty is an art form, and we take pride in being your
            trusted artisans. We believe in enhancing your natural grace and
            helping you feel confident in your own skin. Step into Pixie and be
            prepared to embark on a beauty journey that marries tradition with
            innovation, history with modernity, and our unwavering commitment to
            making you feel and look your absolute best. Welcome to Pixie, where
            timeless beauty traditions meet the future of glamor.
          </div>
        </div>
      </div>
    </div>
  );
}
