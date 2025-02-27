"use client";

import React from "react";
import * as Slider from "@radix-ui/react-slider";

export default function RangeSlider({ min, max, step, values, onChange }) {
    return (
        <div className="w-full">
            <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-6"
                min={min}
                max={max}
                step={step}
                value={values}
                onValueChange={onChange}
            >
                {/* Track */}
                <Slider.Track className="bg-gray-300 relative grow rounded-full h-1">
                    <Slider.Range className="absolute bg-red-500 rounded-full h-full" />
                </Slider.Track>

                {/* Min Handle */}
                <Slider.Thumb
                    className="block w-5 h-5 bg-red-500 rounded-full cursor-pointer hover:bg-red-600 focus:outline-none"
                    aria-label="Minimum Value"
                />

                {/* Max Handle */}
                <Slider.Thumb
                    className="block w-5 h-5 bg-red-500 rounded-full cursor-pointer hover:bg-red-600 focus:outline-none"
                    aria-label="Maximum Value"
                />
            </Slider.Root>

            {/* Display Min & Max Values */}
            <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>{values[0]}</span>
                <span>{values[1]}</span>
            </div>
        </div>
    );
}
