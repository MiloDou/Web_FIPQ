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
const recursoLogoMetaforaEditores = import.meta.glob<string>("../../Contenido/logo-metafora-editores.png", {
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

// Excluimos los afiches/logos (58-73 y 95) y usamos el resto del archivo fotográfico
const EXCLUIDAS = new Set([
  58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 95,
]);

export const galeriaImages = contenidoImages.filter((_, idx) => {
  // contenidoImages está ordenado numéricamente (índice 0 = image1, índice 57 = image58...)
  const num = idx + 1;
  return !EXCLUIDAS.has(num);
});

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
  crowdBw: obtenerImagenPorNombre("image81.jpeg"),
  posterRed: obtenerImagenPorNombre("image03.jpg"),
  risographBook: obtenerImagenPorNombre("image24.jpg"),
  workshop: obtenerImagenPorNombre("image03.jpg"),
  festivalHeaderBg: obtenerImagenPorNombre("image128.jpeg"),
  editorialHeaderBg: obtenerImagenPorNombre("image12.jpg"),
};

export const logoImage = Object.values(recursoLogo)[0] ?? "";
export const logoMetaforaEditores = Object.values(recursoLogoMetaforaEditores)[0] ?? "";
