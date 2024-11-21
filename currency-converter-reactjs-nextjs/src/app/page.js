import CurrenciesSection from "@/components/CurrenciesSection";
import CurrencyUpdate from "@/components/CurrencyUpdate";
import Menubar from "@/components/Menubar";

export default function HomePage() {
  return (
    <div className="h-full w-full bg-[#dedede] flex flex-col">
      
      {/* Currency Update Date & Time Section */}
      <CurrencyUpdate />

      {/* All Currencies Rates - Section */}
      <CurrenciesSection />

      {/* Menubar Section */}
      <Menubar />

    </div>
  );
}
