export const CONFIG = {
  nombre: 'BOBEDAS',
  descripcion: 'Listones, cintillos y materiales para proyectos creativos.',
  email: 'hola@bobedas.com',
  telefono: '+52 55 1234 5678',
  direccion: 'Ciudad de México, México',
  redes: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
}

export const MONEDA = {
  locale: 'es-MX',
  codigo: 'MXN',
  simbolo: '$',
}

const formateador = new Intl.NumberFormat(MONEDA.locale, {
  style: 'currency',
  currency: MONEDA.codigo,
  minimumFractionDigits: 2,
})

export function formatearPrecio(valor) {
  return formateador.format(valor)
}
