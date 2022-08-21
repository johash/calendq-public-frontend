import Image from "next/image";
import InfoCard from "./InfoCard/InfoCard";

const SidePane = () => {
  return (
    <div className="bg-[#0F1025] w-[23%] h-full rounded-xl relative shadow-md">
      <div className="py-8 px-5 border-b-2 border-[#98D300]">
        <div>
          <Image
            src="/assets/logo.png"
            alt="calendQ logo"
            width={69}
            height={14}
          />
        </div>
        <h1 className="text-white text-2xl font-bold pt-2">
          Commercial Tech. Annual Discussion
        </h1>
      </div>
      <div className="p-6">
        <div className="flex flex-col items-center gap-2">
          <InfoCard title="Supun Mayushan" sub="Organizer" />
          <InfoCard title="30 Minutes" sub="Duration" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4">
          <button className="bg-transparent px-4 py-3 text-[#AEAFD1] text-xs border border-[#303148] rounded-full outline-none">
            Cookie Settings
          </button>
          <button className="bg-transparent px-4 py-3 text-[#AEAFD1] text-xs border border-[#303148] rounded-full outline-none">
            Troubleshoot
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidePane;
