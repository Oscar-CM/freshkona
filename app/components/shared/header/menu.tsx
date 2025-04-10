import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link
          href='/signin'
          className='items-center header-button hiddden hidden md:flex'
        >
          Hello, Guest
        </Link>

        <Link href='/cart' className='header-button'>
          <div className='flex gap-2 items-center'>
            <ShoppingCartIcon className='h-8 w-8' />
            Cart
          </div>
        </Link>
      </nav>
    </div>
  )
}
