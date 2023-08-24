import { NextResponse } from 'next/server';
import { getProductFeed } from '@service/productFeedService';

const handler = async (req) => {
  const data = await getProductFeed(req);
  return NextResponse.json({ data });
};

export { handler as GET };
