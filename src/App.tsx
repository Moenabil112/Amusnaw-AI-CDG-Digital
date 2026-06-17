import { LanguageProvider } from "./i18n";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StrategicThesis from "./components/StrategicThesis";
import CDGEntry from "./components/CDGEntry";
import LaunchProducts from "./components/LaunchProducts";
import IsseksiSection from "./components/IsseksiSection";
import PR3538746Section from "./components/PR3538746Section";
import HyrionSection from "./components/HyrionSection";
import QassasSection from "./components/QassasSection";
import Roadmap from "./components/Roadmap";
import Shareholding from "./components/Shareholding";
import DocumentCenter from "./components/DocumentCenter";
import AccessRequest from "./components/AccessRequest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <StrategicThesis />
          <CDGEntry />
          <LaunchProducts />
          <IsseksiSection />
          <PR3538746Section />
          <HyrionSection />
          <QassasSection />
          <Roadmap />
          <Shareholding />
          <DocumentCenter />
          <AccessRequest />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
