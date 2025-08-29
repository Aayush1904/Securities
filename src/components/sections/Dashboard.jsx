import Lottie from "lottie-react";
import businessTeamAnimation from "../../assets/business-team.json";
import ElectricBorder from "../UI/ElectricBorder";

function Dashboard() {
  return (
    <section className="relative">
      <div className="bottom-0 -z-10 absolute bg-primary-500 w-full h-1/2" />
      <div className="justify-items-center grid m-auto px-4 sm:px-8 md:px-16 xl:px-24 py-8 md:py-16 max-w-[90rem]">
        <div className="relative w-full max-w-6xl">
          <ElectricBorder
            color="#FFB84C"
            speed={1.2}
            chaos={0.6}
            thickness={3}
            style={{ borderRadius: 16 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <Lottie 
                animationData={businessTeamAnimation}
                loop={true}
                autoplay={true}
                style={{ width: "100%", height: "400px" }}
              />
            </div>
          </ElectricBorder>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 max-w-xs">
            <h3 className="font-bold text-primary-500 text-lg mb-2">Live Market Data</h3>
            <p className="text-sm text-primary-500">NSE & BSE integration with real-time learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
