export interface Product {
  descripcion: string
  marca: string
  url: string
  precio: string
  imagen: string
  filter: string
  categoria: string 
  subCategoria: string
  likes: number
  genero: string
  urlAfiliado: string
  id: string
}

export interface RutaIdiomas {
  [key: string]: string;
}