const recursosContenido = import.meta.glob<string>("../../Contenido/image*", {
  eager: true,
  import: "default",
  query: "?url",
});
const recursoLogo = import.meta.glob<string>("../../Contenido/logo.jpg", {
  eager: true,
  import: "default",
  query: "?url",
});

function obtenerImagenPorNombre(nombre: string) {
  return Object.entries(recursosContenido).find(([ruta]) => ruta.endsWith(`/${nombre}`))?.[1] ?? "";
}

export const contenidoImages = Object.entries(recursosContenido)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([, url]) => url);

const imagenesDocumentales = [
  obtenerImagenPorNombre("image01.jpg"),
  obtenerImagenPorNombre("image02.jpg"),
  obtenerImagenPorNombre("image03.jpg"),
  obtenerImagenPorNombre("image04.jpg"),
];

export const imagenesSitio = {
  wallCollage: obtenerImagenPorNombre("image01.jpg"),
  booksStack: obtenerImagenPorNombre("image02.jpg"),
  poetPortrait: obtenerImagenPorNombre("image03.jpg"),
  stageNight: obtenerImagenPorNombre("image32.jpg"),
  crowdBw: obtenerImagenPorNombre("image04.jpg"),
  posterRed: obtenerImagenPorNombre("image03.jpg"),
  risographBook: obtenerImagenPorNombre("image24.jpg"),
  workshop: obtenerImagenPorNombre("image03.jpg"),
};

export const logoImage = Object.values(recursoLogo)[0] ?? "";
