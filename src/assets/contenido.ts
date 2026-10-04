const recursosContenido = import.meta.glob<string>("../../Contenido/**/*.{jpg,jpeg,png,gif,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});
const logosIdentidad = import.meta.glob<string>(
  "../../Contenido/Logos y Contenido/*.{png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);
const videosIdentidad = import.meta.glob<string>("../../Contenido/Logos y Contenido/*.mp4", {
  eager: true,
  import: "default",
  query: "?url",
});

const esContenidoFotografico = ([ruta]: [string, string]) => !ruta.includes("/Logos y Contenido/");

export function obtenerImagenContenido(rutaRelativa: string) {
  const sufijo = `/Contenido/${rutaRelativa}`;
  return Object.entries(recursosContenido).find(([ruta]) => ruta.endsWith(sufijo))?.[1] ?? "";
}

const entradasContenido = Object.entries(recursosContenido)
  .filter(esContenidoFotografico)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }));

export const contenidoImages = entradasContenido.map(([, url]) => url);

// Cada edición toma las fotografías directamente de su carpeta en Contenido.
export const fotosArchivoPorEdicion = entradasContenido.reduce<Record<string, string[]>>(
  (fotos, [ruta, url]) => {
    const numeroEdicion = ruta.match(/\/(\d+)FIPQ\//i)?.[1];
    if (numeroEdicion) (fotos[numeroEdicion] ??= []).push(url);
    return fotos;
  },
  {},
);

// Los promocionales se conservan para el archivo histórico, pero no aparecen en Galería.
export const galeriaImages = entradasContenido
  .filter(([ruta]) => !ruta.toLocaleLowerCase().includes("/promocionales/"))
  .map(([, url]) => url);

export const galeriaImageAlt = Object.fromEntries(
  entradasContenido
    .filter(([ruta]) => !ruta.toLocaleLowerCase().includes("/promocionales/"))
    .map(([ruta, url]) => {
      const edicion = ruta.match(/\/(\d+)FIPQ\//i)?.[1];
      const contexto = edicion
        ? `archivo fotográfico de la edición ${edicion}`
        : "archivo fotográfico institucional";
      return [
        url,
        `Registro del ${contexto} del Festival Internacional de Poesía de Quetzaltenango`,
      ];
    }),
);

export const imagenesSitio = {
  wallCollage: obtenerImagenContenido("19FIPQ/20FIPQ_image01.jpg"),
  booksStack: obtenerImagenContenido("19FIPQ/20FIPQ_image02.jpg"),
  poetPortrait: obtenerImagenContenido("19FIPQ/20FIPQ_image03.jpg"),
  stageNight: obtenerImagenContenido("20FIPQ/20FIPQ_image32.jpg"),
  homeBackground: obtenerImagenContenido("20FIPQ/20FIPQ_image131.jpeg"),
  contextCommunity: obtenerImagenContenido("20FIPQ/20FIPQ_image130.jpeg"),
  posterRed: obtenerImagenContenido("20FIPQ/20FIPQ_image04.jpg"),
  risographBook: obtenerImagenContenido("19FIPQ/19FIPQ_image24.jpg"),
  workshop: obtenerImagenContenido("20FIPQ/20FIPQ_image05.jpg"),
  festivalHeaderBg: obtenerImagenContenido("20FIPQ/20FIPQ_image04.jpg"),
  editorialHeaderBg: obtenerImagenContenido("image04.jpg"),
};

function obtenerLogo(nombre: string) {
  const normalizar = (valor: string) => valor.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  const buscado = normalizar(nombre);
  return (
    Object.entries(logosIdentidad).find(([ruta]) => {
      const archivo =
        ruta
          .split("/")
          .at(-1)
          ?.replace(/^Logos_y_Contenido_/, "") ?? "";
      return normalizar(archivo) === buscado;
    })?.[1] ?? ""
  );
}

export const logoImage = obtenerLogo("logo.jpg");
export const logoHome = obtenerLogo("logo.png") || logoImage;
export const logoHomeMark = obtenerLogo("PLAYERA + bolsa-04.png");
export const logoMetaforaEditores = obtenerLogo("logo-metafora-editores.png");
export const logoMetaforaCompleto = obtenerLogo("PLAYERA + bolsa-06.png");

export const logosPortada = {
  festival: obtenerLogo("PLAYERA + bolsa-03.png"),
  central: obtenerLogo("PLAYERA + bolsa-05.png"),
};

export const videoFipq21 = Object.values(videosIdentidad)[0] ?? "";
