import { ImageResponse } from 'next/og'
import { Product as ProductType } from "@/data/types/products";
import { api } from '@/data/api';
import { env } from '@/env';

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

async function getProduct(slug: string): Promise<ProductType> {
  const response = await api(`/products/${slug}`)

  if (!response.ok) {
    throw new Error('Product not found')
  }

  const product = await response.json()

  return product as ProductType
}
 
export default async function OgImage({ params } : { params: { slug: string } }) {
    const product = await getProduct(params.slug)

    const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
        <div
        style={{
            background: '#0b0b0b',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
      >
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),

    {
      ...size,
    }
  )
}