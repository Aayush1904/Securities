import { reviewImgs } from "../../utils/constants";

function Hero() {
  return (
    <section className="pt-24 md:pt-28 sm:pb-8 md:pb-16">
      <div className="flex flex-nowrap justify-between md:gap-x-24 lg:gap-x-14">
        <div className="max-w-[50rem]">
          <h1 className="mb-16 sm:mb-4 font-bold text-3xl text-primary-500 sm:text-4xl md:text-5xl/[3.5rem] lg:text-6xl/[4rem] xl:text-7xl/[5rem] tracking-tight">
            Master the Indian stock market with{" "}
            <span className="bg-clip-text bg-gradient-to-t from-accent-500 to-accent-200 text-transparent">
              interactive learning
            </span>
          </h1>
          <div className="flex sm:flex-row flex-col items-start sm:items-center gap-4">
            <ul className="flex">
              {reviewImgs.map((headshot) => (
                <li className="-mr-4 last:-mr-0" key={headshot.id}>
                  <img
                    src={headshot.image}
                    alt={headshot.name}
                    className="border-4 border-white rounded-full h-10 sm:h-12"
                  />
                </li>
              ))}
            </ul>
            <p className="font-medium text-primary-500 sm:text-lg">
              <span className="font-bold text-accent-500">1,00,000+</span> Indian investors
              educated in 2024
            </p>
          </div>
        </div>
        <figure>
          <div className="lg:flex justify-center items-center hidden xl:mr-8 rounded-full w-52 h-52 outline outline-1 outline-primary-500">
            <div className="flex flex-col justify-center items-center bg-primary-500 rounded-full w-44 h-44">
              <p className="font-bold text-5xl text-white">12+</p>
              <p className="font-bold text-white text-xl">Languages</p>
            </div>
          </div>
        </figure>
      </div>
      
      {/* Additional visual elements for Indian market context */}
      <div className="mt-16 hidden lg:flex justify-center items-center gap-8">
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-white font-medium">NSE Live Data</span>
        </div>
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-white font-medium">BSE Integration</span>
        </div>
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
          <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
          <span className="text-white font-medium">SEBI Compliant</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
