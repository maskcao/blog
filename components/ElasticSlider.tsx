
import React, { useState, useEffect, useRef } from 'react';

interface ElasticSliderProps {
  defaultValue?: number;
  startingValue?: number;
  maxValue?: number;
  isStepped?: boolean;
  stepSize?: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onChange?: (value: number) => void;
  value?: number; // Added to support controlled mode
}

const ElasticSlider: React.FC<ElasticSliderProps> = ({
  defaultValue = 50,
  startingValue = 0,
  maxValue = 100,
  isStepped = false,
  stepSize = 1,
  leftIcon,
  rightIcon,
  onChange,
  value: controlledValue,
}) => {
  // Use controlled value if provided, otherwise internal state
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue || startingValue);
  const currentValue = isControlled ? controlledValue : internalValue;

  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const percentage = Math.min(100, Math.max(0, (currentValue / maxValue) * 100));

  const handleInteraction = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
    const rawPercentage = x / rect.width;
    let newValue = rawPercentage * maxValue;

    if (isStepped && stepSize) {
      newValue = Math.round(newValue / stepSize) * stepSize;
    }

    // Clamp
    newValue = Math.min(Math.max(0, newValue), maxValue);

    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleInteraction(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleInteraction(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleInteraction(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        handleInteraction(e.touches[0].clientX);
      }
    };

    const handleUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [isDragging, maxValue, stepSize, isStepped, onChange, isControlled]);

  return (
    <div className="flex items-center gap-3 w-full select-none touch-none">
      {leftIcon && (
        <div className="text-zinc-500 dark:text-zinc-400 shrink-0">
          {leftIcon}
        </div>
      )}
      
      <div 
        ref={sliderRef}
        className="relative flex-1 h-12 flex items-center cursor-pointer group"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Track Background */}
        <div className="absolute w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden transition-all duration-300 ease-out group-hover:h-3">
           {/* Fill */}
           <div 
             className="h-full bg-black dark:bg-white rounded-full transition-all duration-100 ease-linear"
             style={{ width: `${percentage}%` }}
           />
        </div>

        {/* Elastic Thumb / Glow Effect */}
        <div 
          className="absolute h-6 w-6 bg-white dark:bg-zinc-200 rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 transform transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] pointer-events-none"
          style={{ 
            left: `${percentage}%`, 
            transform: `translate(-50%, 0) scale(${isDragging ? 1.5 : 1})` 
          }}
        >
          {/* Inner Dot */}
          <div className={`absolute inset-0 m-auto w-2 h-2 rounded-full bg-black dark:bg-zinc-900 transition-all duration-300 ${isDragging ? 'scale-50' : 'scale-100'}`} />
        </div>
      </div>

      {rightIcon && (
        <div className="text-zinc-500 dark:text-zinc-400 shrink-0">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default ElasticSlider;
