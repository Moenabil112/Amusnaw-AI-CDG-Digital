import { LanguageProvider } from "./i18n";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StrategicThesis from "./components/StrategicThesis";
import CDGEntry from "./components/CDGEntry";
import LaunchProducts from "./components/LaunchProducts";
import IsseksiSection from "./components/IsseksiSection";
import AguelmousSection from "./components/AguelmousSection";
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
      {/* overflow-x-clip guards against any incidental horizontal scroll */}
      <div className="min-h-screen overflow-x-clip">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <StrategicThesis />
          <CDGEntry />
          <LaunchProducts />
          <IsseksiSection />
          <AguelmousSection />
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
