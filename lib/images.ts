/**
 * Registro central de imágenes.
 *
 * CÓMO REEMPLAZAR UNA IMAGEN CON LA TUYA:
 * 1. Coloca tu archivo en /public/brand/  (p.ej. /public/brand/hero-phone.png)
 * 2. Cambia el valor de esa clave de `cdn(...)` a `"/brand/hero-phone.png"`
 * 3. Listo — cada lugar donde aparece esa imagen en el sitio se actualiza automáticamente.
 *
 * Las claves son los IDs de imagen del CDN de Framer (la parte del nombre de archivo de la URL del CDN).
 * Los valores son cdn("...") — usando el CDN — o una ruta local "/brand/...".
 */

const CDN = "https://framerusercontent.com/images";
const cdn = (id: string) => `${CDN}/${id}`;

export const IMAGES = {
  // ── Marca / Logos ────────────────────────────────────────────────────────
  logoClinicarenova:  cdn("1BRDkIzVV7TxG8fJDyUWdUDDE.png"),   // ClínicaRenova wordmark (blanco)
  legitscript:        cdn("q2uWrYWiZmMyus58IGeMLSbGI.png"),   // Sello LegitScript

  // ── Íconos (SVG) ─────────────────────────────────────────────────────────
  iconEmail:          cdn("mOouvtzIDHOerqUQ0hDOpizA.svg"),
  iconPhone:          cdn("E2HTcWzFVYj8RkAxT3IGYNuY.svg"),
  iconLocation:       cdn("Ly2H9feVHgGgo55QqMcUBXLE5uo.svg"),
  iconCheck:          cdn("QG8WHNxXqMMGSvYoe11QogyAaQ.svg"),
  iconArrow:          cdn("uBsU5ZsqLrzBSK23aKqkDZSVGIo.svg"),
  iconStar:           cdn("YNzdkrl3B55n6jdaG6fo6LYESZA.svg"),
  iconQuote:          cdn("QZxfRAhxllYfpGxMEuk6kFVLhU.svg"),

  // ── Página Principal ──────────────────────────────────────────────────────
  heroBackground:     cdn("vyhgfyTZdnvKgcOFSsKadXmcI.png"),
  heroPhone:          cdn("DledV5XhgNZMvvKuNPweP2g.png"),
  categoryWeightLoss: cdn("6DlpR3ftJ6MctTZwyeuvp0hxAY.jpg"),
  categoryWomens:     cdn("OGDQI8XA7V2CREgeUjtv3qMehk.jpg"),
  categoryMensHealth: cdn("a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg"),
  categoryPeptides:   cdn("iZZOz7kuB4YLvdGWAg8yO3avoLQ.jpg"),

  // ── Imágenes de Secciones de Servicios ───────────────────────────────────
  weightLossPhone:    cdn("9WyYelkv3EfaJFi50PZydNSt2ws.png"),
  womensHealth:       cdn("A1lwE6WKdaWtTNHV4R3xFZ1ljVo.jpg"),
  mealsFood:          cdn("naCtfcJucSb08iZrMiFEu70fwNw.jpg"),
  supplements:        cdn("c7UYcEZ9pL7emhQ8SH0e0iV0d8.jpg"),
  mensHealth:         cdn("6NG7JMcShVQy0ZvhiVszVR6REZg.jpg"),
  peptides:           cdn("cYEX3QqVD69lMmw1NIEAUOSMB8.jpg"),
  hairRestoration:    cdn("d4SpmpLmhUfMZkWsTOukrdAmhg.jpg"),
  skincare:           cdn("yTHZiTQnD4nN9DjRINV2s2nJf6c.jpg"),

  // ── Fotos de ¿Por qué ClínicaRenova? / Características ───────────────────
  whyPhoto1:          cdn("L7wxKZ4YKHUKiODGYQrRlQYvTKo.png"),
  whyPhoto2:          cdn("MoQjUaFVDcKosmLtidv94kjQ3Zk.png"),
  whyPhoto3:          cdn("Mxnbv5mgfdNQdzlTMMRKrfJZJE.png"),
  whyPhoto4:          cdn("M9XaNbbDAjo8pUf3JffgMRQ44.png"),

  // ── Médicos ───────────────────────────────────────────────────────────────
  doctorCarr:         cdn("VlXVSTuHKTz4XzjZzNLWYchfHMQ.png"),
  doctorTenbrink:     cdn("WUFCBuh0wNjDvRv5B5ZqEH4mjA.png"),

  // ── Página GLP ────────────────────────────────────────────────────────────
  glpHero:            cdn("3b210go7xrqsX3cBCZkQjPg7lc.png"),
  glpPhone:           cdn("eNSyOYR4nWN2eC2kBvfFakC0Jc.png"),
  glpScience:         cdn("h93zMm4ey20O082JGj8IZMrl3I.png"),

  // ── Página QUAD ───────────────────────────────────────────────────────────
  quadHero:           cdn("6YhaoNUtBTiFwuXYBUD7Gi0ss.jpg"),
  quadProduct:        cdn("nrGxwSsRFp57MwVq6ihfcnRm8bA.png"),
  quadIngredients:    cdn("ntqVQOpXgrrjXKAUz9BTmnE2u0I.png"),

  // ── Página Nutrición ─────────────────────────────────────────────────────
  mealsLogo:          cdn("snLhnFxV1S915H070FVXdFseVw.png"),
  mealsHero:          cdn("paOnEoR3Gqf2LWRZGYBJ2Uokw.png"),
  meal1:              cdn("ihBupsd47mUBkztGVAMt31VNRN4.png"),
  meal2:              cdn("keDlEK59Fa69dFZn1FAHPjD1j8.png"),
  meal3:              cdn("Qzg7hOnOYm2PR1xuvL1xDf7C4M.png"),
  meal4:              cdn("TDqwwuuERJIkMwN3ZjsZgCTOFoU.png"),
  meal5:              cdn("ZlJbchQEeboQ3J4HC0w7Lj2SRvQ.png"),
  meal6:              cdn("zmJZrAHLgexbSUaBuE8JSFohl8.png"),
  meal7:              cdn("3YQLMZEk5tHlkmMh4CjpAifaEc.jpg"),
  meal8:              cdn("u8K8rbgmRaS81RzFu2M7Wl00qI.jpg"),

  // ── Formulario de Registro ────────────────────────────────────────────────
  intakeGlpSide:      cdn("vC7EYvFVXWs3QWn7JLdi51Vvd7s.png"),
  intakeQuadSide:     cdn("6ysW5nd4tzXcofaTriOcTvKB7yw.jpg"),
} as const;

export type ImageKey = keyof typeof IMAGES;
