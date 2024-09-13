import './style.css'
import typescriptLogo from './typescript.svg'
//import '/src/temas-ts/01-tipos-bats.ts'
//import '/src/temas-ts/02-interfaz-obj.ts'
//import '/src/temas-ts/03-funciones.ts'
//import '/src/temas-ts/04-desestructurar-obj-arre.ts'
//import '/src/temas-ts/05-desestructurar-funciones.ts'
//import '/src/temas-ts/06-exportar-importar.ts'
//import '/src/temas-ts/07-clases.ts'
//import '/src/temas-ts/08-herencia.ts'
import '/src/temas-ts/Areas.ts'
//import '/src/temas-ts/Volumenes.ts'

import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
