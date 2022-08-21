import Image from "next/image";
import { TbChevronDown } from "react-icons/tb";

import CalendarArea from "./CalendarArea/CalendarArea";

const DatePanel = () => {
  return (
    <div className="w-[77%] flex flex-col items-center justify-between mt-4">
      <div>
        <h2 className="text-[#0F1025] text-center font-bold text-2xl">
          Select Date & Time
        </h2>
        <div className="bg-[#E9E9E9] flex items-center gap-4 py-2 px-4 rounded-full mt-4">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/globe.png"
              alt="Globe Icon"
              width={15}
              height={15}
            />
            <span className="text-[#989898] font-medium">Timezone</span>
            <p className="text-[#5E5E5E] font-medium">
              Indian Standard Time (23:55)
            </p>
          </div>
          <div>
            <TbChevronDown />
          </div>
        </div>
      </div>
      <CalendarArea />
      <div>
        <button className="bg-[#9B9B9B] px-12 py-4 rounded-full text-white text-base font-medium">
          Continue
        </button>
      </div>
    </div>
  );
};

export default DatePanel;
