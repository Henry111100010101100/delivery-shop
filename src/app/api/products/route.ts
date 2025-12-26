import { NextResponse } from 'next/server';
import { getDB } from '@/utils/api-routes';

export async function GET(request: Request) {
  try {
    const category = new URL(request.url).searchParams.get('category');

    if (!category) {
      return NextResponse.json({ message: 'Параметр категории обязателен', status: 400 });
    }

    const products = await (await getDB()).collection('products').find({ categories: category }).toArray();
    return NextResponse.json(products);
  } catch (e) {
    console.error('Ошибка при получении данных с сервера:', e);
    return NextResponse.json('Ошибка при получении акционных продуктов с сервера', { status: 500 })
  }
}
