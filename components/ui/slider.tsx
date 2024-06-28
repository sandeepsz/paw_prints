"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, value, onValueChange, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    value={value}
    onValueChange={onValueChange}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full rounded-sm grow overflow-hidden  bg-slate-400">
      <SliderPrimitive.Range className="absolute h-full bg-color-brown" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-8 rounded-[2px]  border-2 border-color-brown text-white text-xs bg-color-brown transition-colors">
      {value}%
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
