# Hydration Reminder Extension

Extensión para Firefox que ayuda a recordar al usuario cuándo debe beber agua mediante un temporizador visual interactivo.

---

## Descripción

Esta aplicación consiste en una extensión de navegador que utiliza una representación visual del tiempo mediante un vaso que se va llenando progresivamente.

Cuando el vaso se llena por completo, indica que es el momento de beber agua. El objetivo es fomentar hábitos saludables a través de una interacción sencilla, directa y visual.

El proyecto parte de un ejercicio previo de reloj creativo, adaptado en este caso a una funcionalidad práctica dentro del navegador.

---

## Funcionalidades principales

- Temporizador visual basado en un vaso que se llena con el tiempo.
- Selector de intervalo para definir cada cuánto tiempo se desea recibir el recordatorio (1, 5 o 10 minutos).
- Botón para reiniciar el contador una vez que el usuario ha bebido agua.
- Contador de veces que el usuario ha registrado haber bebido agua.
- Persistencia de datos mediante almacenamiento local (`storeItem()` / `getItem()`).
- Feedback visual mediante cambio de color y efecto de parpadeo cuando el temporizador finaliza.

---

## Tecnologías utilizadas

- **JavaScript**
- **p5.js** (para la animación del vaso y el canvas)
- **HTML y CSS**
- **WebExtensions API (Firefox)**

---

## Estructura del proyecto
