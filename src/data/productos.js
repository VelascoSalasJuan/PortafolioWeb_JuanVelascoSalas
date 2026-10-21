export const CATEGORIAS = ['Todos', 'Listones', 'Cintillos', 'Materiales', 'Kits']

export const productos = [
  {
    id: 1,
    slug: 'liston-satin-45',
    nombre: 'Listón Satinado 4.5 cm',
    categoria: 'Listones',
    precio: 45,
    stock: 24,
    destacado: true,
    descripcion:
      'Listón de satín de 4.5 cm de ancho en tonos sólidos. Suave al tacto y con caída perfecta para REGALOS, moños y decoración de eventos.',
    imagen: 'https://picsum.photos/seed/bobedas-liston/600/600',
  },
  {
    id: 2,
    slug: 'liston-organza-30',
    nombre: 'Organza Estampada 3 cm',
    categoria: 'Listones',
    precio: 38,
    stock: 15,
    destacado: true,
    descripcion:
      'Organza transparente con estampado floral, ideal para coronas, empaques y detalles delicados que dejan ver el fondo.',
    imagen: 'https://picsum.photos/seed/bobedas-organza/600/600',
  },
  {
    id: 3,
    slug: 'cintillo-vellon-25',
    nombre: 'Cintillo de Vellón 2.5 cm',
    categoria: 'Cintillos',
    precio: 52,
    stock: 8,
    destacado: true,
    descripcion:
      'Cintillo aterciopelado con respaldo adhesivo. Se pega con calor y da un acabado profesional a cajas y bolsas.',
    imagen: 'https://picsum.photos/seed/bobedas-vellon/600/600',
  },
  {
    id: 4,
    slug: 'cinta-decorativa-puntada',
    nombre: 'Cinta Decorativa Puntada 1.5 cm',
    categoria: 'Cintillos',
    precio: 29,
    stock: 40,
    destacado: false,
    descripcion:
      'Cinta de algodón con borde puntado clásico. Resistente al lavado y perfecta para scrunchies y lanyards.',
    imagen: 'https://picsum.photos/seed/bobedas-cinta/600/600',
  },
  {
    id: 5,
    slug: 'kit-armar-monos',
    nombre: 'Kit Arma Moños',
    categoria: 'Kits',
    precio: 220,
    stock: 5,
    destacado: true,
    descripcion:
      'Kit completo con 10 listones, 10 cinchos y tutorial en video. Ideal para empezar a vender tus propias piezas.',
    imagen: 'https://picsum.photos/seed/bobedas-kit/600/600',
  },
  {
    id: 6,
    slug: 'hilo-de-costura-blanco',
    nombre: 'Hilo de Costura 0.4 mm',
    categoria: 'Materiales',
    precio: 25,
    stock: 60,
    destacado: false,
    descripcion:
      'Bobina de hilo de polyester color blanco. Se usa para unir piezas y rematar los proyectos.',
    imagen: 'https://picsum.photos/seed/bobedas-hilo/600/600',
  },
  {
    id: 7,
    slug: 'pinzas-cortadoras',
    nombre: 'Pinzas Cortadoras',
    categoria: 'Materiales',
    precio: 95,
    stock: 12,
    destacado: false,
    descripcion:
      'Pinzas de corte diagonal con protectores de silicón. Cortan listón y cinta sin deshilachar las fibras.',
    imagen: 'https://picsum.photos/seed/bobedas-pinzas/600/600',
  },
  {
    id: 8,
    slug: 'cinta-satin-2cm',
    nombre: 'Cinta Satin 2 cm',
    categoria: 'Cintillos',
    precio: 32,
    stock: 35,
    destacado: false,
    descripcion:
      'Cinta de satín basic de 2 cm, ideal para moños de infantil y detallería de empaques.',
    imagen: 'https://picsum.photos/seed/bobedas-cinta2/600/600',
  },
]

export function obtenerProductoPorSlug(slug) {
  return productos.find((producto) => producto.slug === slug)
}

export function obtenerProductosDestacados() {
  return productos.filter((producto) => producto.destacado)
}
