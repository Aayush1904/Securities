import { RxCaretRight } from "react-icons/rx";
import { appStats } from "../../utils/constants";
import trader1 from "../../assets/Trader1.png";
import trader2 from "../../assets/Trader2.png";
import trader3 from "../../assets/Trader3.png";

function AppStatistics() {
  const traderImages = [
    {
      id: 1,
      name: "@rahul_trader",
      description:
        "This platform helped me understand the basics of stock market trading. \
       The interactive tutorials and virtual trading feature gave me the confidence \
        to start investing with real money on NSE and BSE!",
      image: trader1,
    },
    {
      id: 2,
      name: "@priya_investor",
      description:
        "As a beginner, I was overwhelmed by financial jargon. This app translated \
      complex concepts into simple terms and helped me build a diversified portfolio with Indian stocks.",
      image: trader2,
    },
    {
      id: 3,
      name: "@amit_analyst",
      description:
        "The vernacular language support is amazing! I can now learn about \
      securities in Hindi, making financial education accessible to everyone in India.",
      image: trader3,
    },
  ];

  return (
    <section className="bg-primary-500 -mt-[1px]">
      <div className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-24 xl:gap-y-28 m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-10 md:pt-16 pb-16 sm:pb-24 md:pb-32 max-w-[90rem]">
        <div>
          <h2 className="bg-clip-text bg-gradient-to-t from-accent-500 to-accent-200 sm:font-bold text-3xl text-transparent sm:text-4xl md:text-5xl/[3.5rem] lg:text-6xl/[4.6rem] xl:text-7xl/[5.6rem] tracking-tight">
            learn from
          </h2>
          <h2 className="sm:font-bold text-3xl text-white sm:text-4xl md:text-5xl/[3.5rem] lg:text-6xl/[4rem] xl:text-7xl/[5rem] tracking-tight">
            real Indian investor experiences.
          </h2>
        </div>
        <div className="gap-x-4 gap-y-4 md:gap-x-5 lg:gap-x-7 xl:gap-x-9 grid grid-cols-1 sm:grid-cols-3">
          {traderImages.map((img) => (
            <div className="group relative mx-auto" key={img.id}>
              <p className="group-hover:visible top-0 right-0 bottom-0 left-0 absolute bg-primary-800 bg-opacity-40 opacity-0 group-hover:opacity-100 px-6 py-8 text-sm text-white lg:text-lg tracking-tight transition-all duration-200 invisible">
                {img.description}
              </p>
              <img
                key={img.name}
                alt={img.name}
                src={img.image}
                className="rounded-xl md:rounded-2xl shadow-lg"
              />
              <p className="bottom-6 md:bottom-8 left-4 md:left-6 absolute bg-white bg-opacity-20 opacity-100 group-hover:opacity-0 backdrop-blur-sm px-2 py-1 rounded-lg text-sm text-white lg:text-base xl:text-lg transition-all duration-200 group-hover:invisible">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-center sm:items-end gap-y-16">
          <ul className="flex sm:flex-row flex-col gap-8 lg:gap-16 xl:gap-24">
            {appStats.map((stat) => (
              <li key={stat.id}>
                <p className="font-bold text-[2.5rem]/[3rem] text-accent-500 text-center sm:text-left md:text-5xl lg:text-6xl xl:text-7xl/[5rem] tracking-tight">
                  {stat.value}
                </p>
                <p className="md:mt-2 font-normal text-center text-lg text-white sm:text-left md:text-xl lg:text-2xl xl:text-[2rem]/[2.5rem]">
                  {stat.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex items-center sm:items-end gap-4 md:gap-6">
            <p className="text-lg text-white md:text-xl lg:text-2xl xl:text-[2rem]/[2.5rem]">
              Explore our <br className="sm:block hidden" /> learning platform
            </p>
            <button
              aria-label="Explore the learning platform"
              className="group flex justify-center items-center bg-gradient-to-t from-accent-500 to-accent-200 mb-1 rounded-full w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 transition-all duration-200"
            >
              <RxCaretRight className="group-hover:text-white w-12 h-12 text-primary-500 transition-colors" />
            </button>
          </div>
        </div>
        
        {/* Additional Indian market context */}
        <div className="hidden lg:flex justify-center items-center gap-8 mt-8">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
            <span className="text-white text-sm">🇮🇳</span>
            <span className="text-white text-sm font-medium">Made for India</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
            <span className="text-white text-sm">📈</span>
            <span className="text-white text-sm font-medium">NSE & BSE Data</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
            <span className="text-white text-sm">🎓</span>
            <span className="text-white text-sm font-medium">SEBI Approved</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppStatistics;
