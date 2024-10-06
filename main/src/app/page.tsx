import Image from "next/image";
import Link from "next/link";
import { db } from '@/lib/db';

export default function Home() {


  return (
    <div>
      <Link href="/Login">
      Login
      </Link>
      
    </div>
  );
}
