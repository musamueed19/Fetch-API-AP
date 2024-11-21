import CountryFlag from "./CountryFlag";

export default function CurrencyRateCard() {
  return (
    <div className="w-full bg-white border-2 border-transparent hover:border-[#3161ed] cursor-pointer rounded-md p-[1rem] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <CountryFlag />

        <div className="flex flex-col justify-center h-full">
          <p className="card-title">USD</p>
          <p className="card-title-value">1 UAH = 0.024 USD</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-full">
        <p className="card-title">245,64 $</p>
        <p className="card-title-value">United Stated Dollar</p>
      </div>
    </div>
  );
}
