import React from 'react';
import { db } from '@/lib/db';
export default async function Home() {
  await db.set('Hello', 'Hello');
  return (
   <div>
    hello
   </div>
  );
}
