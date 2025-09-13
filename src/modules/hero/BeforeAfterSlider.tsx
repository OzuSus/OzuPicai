import React, {useRef, useState} from 'react';

const BeforeAfterSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = ()=>{
        setIsDragging(true);
    }
    const handleMouseUp = ()=>{
        setIsDragging(false);
    }
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !containerRef.current) return;

        const container = containerRef.current!;
        const rect = container.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };


    return (
        <div>BeforeAfterSider</div>
    );
};

export default BeforeAfterSlider;