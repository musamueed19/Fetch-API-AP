import Convert from "./Convert";
import Latest from "./Latest";
import Settings from "./Settings";

export default function Menubar() {
  return (
    <div className="w-full h-[4rem] bg-white">
      <div className="w-full h-full md:max-w-[80%] lg:max-w-[50%] mx-auto flex justify-center items-center">
        <div className="flex justify-evenly w-full lg:justify-center lg:gap-[2rem]">
          <button className="button">
            Latest
            <Latest />
          </button>
          <button className="button">
            Convert
            <Convert />
          </button>
          <button className="button">
            Settings
            <Settings />
          </button>
        </div>
      </div>
    </div>
  );
}
