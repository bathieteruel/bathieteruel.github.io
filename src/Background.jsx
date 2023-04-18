import './Background.scss';
import { useReducer, useTick, useRef, useEffect } from 'react';
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

        var colors = new Array(
            [62,35,255],
            [60,255,60],
            [255,35,98],
            [45,175,230],
            [255,0,255],
            [255,128,0]);
        
        var step = 0;
        //color table indices for: 
        // current color left
        // next color left
        // current color right
        // next color right
        var colorIndices = [0,1,2,3];
        
        //transition speed
        var gradientSpeed = 0.002;

        /*
        function updateGradient()
        {
            if ( $===undefined ) return;
            
            var c0_0 = colors[colorIndices[0]];
            var c0_1 = colors[colorIndices[1]];
            var c1_0 = colors[colorIndices[2]];
            var c1_1 = colors[colorIndices[3]];

            var istep = 1 - step;
            var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
            var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
            var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
            var color1 = "rgb("+r1+","+g1+","+b1+")";

            var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
            var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
            var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
            var color2 = "rgb("+r2+","+g2+","+b2+")";

            $('#gradient').css({
            background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
                background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
            
            step += gradientSpeed;
            if ( step >= 1 )
            {
                step %= 1;
                colorIndices[0] = colorIndices[1];
                colorIndices[2] = colorIndices[3];
                
                //pick two new target color indices
                //do not pick the same as the current one
                colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
                colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
                
            }
        }
        */

        function drawCircle() {
            const blurAmount = 40;
            //const blur = `blur(${blurAmount}px)`;

            var size = (mouseX/canvas.width)*500;
            
            //ctx.filter = blur;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, 60, 0, 2 * Math.PI);

            var g = (mouseX/canvas.width)*220;
            var b = (mouseY/canvas.height)*220;
            //ctx.fillStyle = `rgb(240, ${g}, ${b})`;
            ctx.fillStyle = '#eeff41';
            ctx.fill();

            //ctx.filter = "none";
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
           // drawCircle();
        }

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="background" />;
    //return <div id="gradient"/>;
}