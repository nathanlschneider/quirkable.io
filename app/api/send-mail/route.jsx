import { sendEmail } from "@service/mailService";
import { NextResponse } from 'next/server';

const handler = async (req) => {
  const data = await sendEmail(req);
  return NextResponse.json({ data });
};

export { handler as POST };
