import { NextResponse } from 'next/server';
import { getDB } from '@/utils/api-routes';
import { UserPurchase } from '@/types/purchasedProduct';

export async function GET() {
  try {
    const db = await getDB();
    const user = await db.collection('users').findOne({});

    if (!user?.purchases?.length) {
      return NextResponse.json([])
    }

    const productIds: number[] = user.purchases.map((purchase: UserPurchase) => purchase.id);

    const purchasedProducts = await db.collection('products').find({ id: { $in: productIds } }).toArray()
    return NextResponse.json(purchasedProducts.map(purchase => {
      const { discountPercent: _unused, ...rest } = purchase;
      return rest;
    }));
  } catch (e) {
    console.error('Ошибка при получении данных с сервера:', e);
    return NextResponse.json('Ошибка при получении покупок пользователя с сервера', { status: 500 })
  }
}
