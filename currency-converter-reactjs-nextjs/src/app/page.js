import CurrenciesSection from "@/components/CurrenciesSection";
import CurrencyUpdate from "@/components/CurrencyUpdate";
import Menubar from "@/components/Menubar";

export default function HomePage() {
  return (
    <div className="h-full w-full bg-[#dedede] flex flex-col">
      {/* Currency Update Date & Time Section */}
      <div className="sticky top-0 z-10">
        <CurrencyUpdate />
      </div>

      {/* All Currencies Rates - Section */}
      <CurrenciesSection />

      {/* Menubar Section */}
      <div className="sticky bottom-0 z-10">
        <Menubar />
      </div>
    </div>
  );
}
