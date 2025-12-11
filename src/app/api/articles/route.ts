import { NextResponse } from 'next/server';
import { getDB } from '@/utils/api-routes';

export async function GET() {
  try {
    const db = await getDB();
    const articles = await db.collection('articles').find().toArray();
    return NextResponse.json(articles);
  } catch (e) {
    console.error('Ошибка при получении данных с сервера:', e);
    return NextResponse.json('Ошибка при получении данных с сервера', { status: 500 })
  }
}
