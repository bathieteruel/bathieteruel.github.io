import './Background.css';
import { useReducer, useTick, useRef, useEffect, getContext } from 'react';
import { KawaseBlurFilter } from "https://cdn.skypack.dev/@pixi/filter-kawase-blur@3.2.0";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@3.0.0";
import hsl from "https://cdn.skypack.dev/hsl-to-hex";
import debounce from "https://cdn.skypack.dev/debounce";


export function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let mouseX = 0;
        let mouseY = 0;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function drawCircle() {
            const blurAmount = 50;
            const blur = `blur(${blurAmount}px)`;
            
            ctx.filter = blur;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
            ctx.fillStyle = 'tomato';
            ctx.fill();

            ctx.filter = "none";
        }

        function drawCircle_2(x, y, color, size) {
            const blurAmount = 50;
            const blur = `blur(${blurAmount}px)`;

            ctx.filter = blur;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.filter = "none";
        }

        function handleMouseMove(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }

        window.addEventListener('mousemove', handleMouseMove);

        function animate() {
            requestAnimationFrame(animate);
            drawCircle();
        }

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

  return <canvas ref={canvasRef} className="background" />;
  }