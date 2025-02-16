"use client";
import { useState } from "react";

type ModernRangeSliderProps = {
  min?: number;
  max?: number;
  defaultValue?: number;
};

const RangeInput: React.FC<ModernRangeSliderProps> = ({
  min = 0,
  max = 20,
  defaultValue = 10,
}) => {
  const [value, setValue] = useState<number>(defaultValue);

  return (
    <div className="w-full p-5 text-center rtl relative">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        step={1}
        className="w-full appearance-none h-2 bg-gray-300 rounded-lg outline-none cursor-pointer rtl:direction-rtl"
        style={{
          background: `linear-gradient(to left, #FDBF60, #FF8911 ${
            ((value - min) / (max - min)) * 100
          }%, #9F70FD ${((value - min) / (max - min)) * 100}%, #7F27FF)`,
        }}
      />
      <div className="mt-2 text-lg font-bold text-[#7F27FF]">{value}</div>
      <div className="absolute bottom-0 left-0 w-full flex justify-between px-2">
        {[...Array(max - min + 1)].map((_, i) => (
          <div key={i} className="w-1 h-4 bg-gray-500"></div>
        ))}
      </div>
    </div>
  );
};

export default RangeInput;
