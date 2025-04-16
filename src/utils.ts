import { createSignal } from "solid-js";

export const varIdxSignal = createSignal<number>(Math.floor(Math.random() * 4));
export const totalSignal = createSignal<number>(0);
export const correctSignal = createSignal<number>(0);
export const diffSignal = createSignal<number>(3);

export function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

export function changeColours(): void {
  function toRGB(colour: number[]): string {
    return `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`;
  }

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const base: number[] = [red, blue, green];

  const diffR: number = clamp(
    (Math.random() - 0.5) * diffSignal[0]() * 45 + diffSignal[0]() * 10,
    0,
    255
  );
  const diffG: number = clamp(
    (Math.random() - 0.5) * diffSignal[0]() * 45 + diffSignal[0]() * 10,
    0,
    255
  );
  const diffB: number = clamp(
    (Math.random() - 0.5) * diffSignal[0]() * 45 + diffSignal[0]() * 10,
    0,
    255
  );
  const variant: number[] = [base[0] + diffR, base[1] + diffB, base[2] + diffG];

  console.log(base, variant, diffSignal[0]());

  document.documentElement.style.setProperty("--colour-variant", toRGB(base));
  document.documentElement.style.setProperty("--colour-normal", toRGB(variant));
}

export function randomiseIdx(): void {
  varIdxSignal[1](Math.floor(Math.random() * 4));
}
