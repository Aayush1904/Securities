// App layout
import Page from "../components/sections/Page";

// Header
import Header from "../components/sections/Header";
import Navigation from "../components/sections/Navigation/Navigation";
import Hero from "../components/sections/Hero";

// Main
import Main from "../components/sections/Main";
import Dashboard from "../components/sections/Dashboard";
import AppStatistics from "../components/sections/AppStatistics";
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing/Pricing";
import Testimonials from "../components/sections/Testimonials/Testimonials";
import CTA from "../components/sections/CTA";

// Footer
import Footer from "../components/sections/Footer";

// UI
import Modal from "../components/UI/Modal";
import MoreInformation from "../components/UI/MoreInformation";

function LandingPage() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>

      <Main>
        <Dashboard />
        <AppStatistics />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </Main>

      <Footer />

      <Modal modalName="more-information">
        <MoreInformation />
      </Modal>
    </Page>
  );
}

export default LandingPage;
