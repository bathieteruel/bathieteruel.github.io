import './Background.css';
import { Stage, Sprite } from '@inlet/react-pixi'
import { KawaseBlurFilter } from "https://cdn.skypack.dev/@pixi/filter-kawase-blur@3.2.0";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@3.0.0";
import hsl from "https://cdn.skypack.dev/hsl-to-hex";
import debounce from "https://cdn.skypack.dev/debounce";

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export function Background () {

    return (
        <canvas class='vis-canvas'></canvas>
    );
}