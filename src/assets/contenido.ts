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
  wallCollage: imagenesDocumentales[0],
  booksStack: imagenesDocumentales[1],
  poetPortrait: imagenesDocumentales[2],
  stageNight: imagenesDocumentales[0],
  crowdBw: imagenesDocumentales[3],
  posterRed: imagenesDocumentales[2],
  risographBook: imagenesDocumentales[1],
  workshop: imagenesDocumentales[2],
};

export const logoImage = Object.values(recursoLogo)[0] ?? "";
