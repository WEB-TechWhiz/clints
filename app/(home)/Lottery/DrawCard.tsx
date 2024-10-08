import { DrawCardProps } from '@/types';
import React from 'react'
import Image from 'next/image';

function DrawCard({
    logoSrc,
    betAddress,
    betAmount,
    drawTime,
}: DrawCardProps) {

    const formatTime = (value: number) => (value < 10 ? `0${value}` : value);
    
    return (
        <section className="l1baaa8z" style={{ filter: 'grayscale(0)' }}>
            <div className="upcoming-draw-item-logo-box">
 <Image
 src={logoSrc}
 alt="1" 
  width={450}  // Set width based on the source
  height={300}  // Set appropriate height
  priority={true}  // Optional: prioritize this image for faster loading
/>
                
                
            </div>
            <div className="bet-address">{betAddress}</div>
            <div className="bet-amount ellipsis">
                <label>$</label>
                {betAmount}
            </div>
            <div className="split"></div>
            <div className="bet-next-draw-desc">Next Draw Starts in</div>
            <div className="bet-next-draw-date">
                <span className="bet-date-content">{formatTime(drawTime.hours)}h</span>
                <label className="bet-date-colon flex-center">:</label>
                <span className="bet-date bet-date-content">{formatTime(drawTime.minutes)}m</span>
                <label className="bet-date-colon flex-center">:</label>
                <span className="bet-date-content">{formatTime(drawTime.seconds)}s</span>
            </div>
            <button className="ui-button button-normal s-conic bet-btn">
                <div className="button-inner">Bet Now</div>
            </button>
        </section>
    )
}

export default DrawCard