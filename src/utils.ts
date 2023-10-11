import { createSignal } from "solid-js";

export const varIdxSignal = createSignal<number>(Math.floor(Math.random() * 4));
export const totalSignal = createSignal<number>(0);
export const correctSignal = createSignal<number>(0);

export function changeColours(): void {
  const red = () => Math.floor(Math.random() * 256);
  const green = () => Math.floor(Math.random() * 256);
  const blue = () => Math.floor(Math.random() * 256);
  const colour = () => `rgb(${red()}, ${green()}, ${blue()})`;
  document.documentElement.style.setProperty("--colour-variant", colour());
  document.documentElement.style.setProperty("--colour-normal", colour());
}

export function randomiseIdx(): void {
  varIdxSignal[1](Math.floor(Math.random() * 4));
}
