import Image from "next/image";
import Link from "next/link";
import { db } from '@/lib/db';

export default function Home() {
  async function main() {
    await db.set('Supp', 'world');}
     main()

  return (
    <div>
      <Link href="/Login">
      Login
      </Link>
      
    </div>
  );
}
