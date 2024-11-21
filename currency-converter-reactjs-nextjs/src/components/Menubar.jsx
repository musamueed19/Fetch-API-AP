import Convert from "./Convert";
import Latest from "./Latest";
import Settings from "./Settings";

export default function Menubar() {
  return (
    <div className="w-full h-[4rem] bg-white sticky top-1">
      <div className="w-full h-full md:max-w-[80%] lg:max-w-[50%] mx-auto flex justify-center items-center">
        <div className="flex justify-evenly w-full lg:justify-center lg:gap-[2rem]">
          <button className="flex items-center border-blue-300/60 border-2 rounded-lg px-3 py-2 gap-2 bg-blue-50/50 hover:bg-blue-100/50 text-[#3161ed] font-bold">
            Latest
            <Latest />
          </button>
          <button className="flex items-center border-blue-300/60 border-2 rounded-lg px-3 py-2 gap-2 bg-blue-50/50 hover:bg-blue-100/50 text-[#3161ed] font-bold">
            Convert
            <Convert />
          </button>
          <button className="flex items-center border-blue-300/60 border-2 rounded-lg px-3 py-2 gap-2 bg-blue-50/50 hover:bg-blue-100/50 text-[#3161ed] font-bold">
            Settings
            <Settings />
          </button>
        </div>
      </div>
    </div>
  );
}
