import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'

const categories = ['Fruits', 'Vegetables', 'Meat', 'Drinks', 'Dairy']

export default async function Search() {
  return (
    <form
      action='/search'
      method='GET'
      className='flex items-center h-8 bg-gray-100 rounded-md shadow-sm overflow-hidden'
      aria-label='Search form'
    >
      {/* Category Selector */}
      <Select name='category'>
        <SelectTrigger
          className='w-auto h-full px-2 bg-gray-100 text-xs text-black border-none rounded-r-none rounded-l-md focus:ring-primary focus:ring-1 focus:ring-offset-0 transition-colors'
          aria-label='Select category'
        >
          <SelectValue placeholder='All' />
        </SelectTrigger>
        <SelectContent
          position='popper'
          className='bg-white shadow-md rounded-md'
        >
          <SelectItem
            value='all'
            className='text-xs px-2 py-1 hover:bg-gray-100 cursor-pointer'
          >
            All
          </SelectItem>
          {categories.map((category) => (
            <SelectItem
              key={category}
              value={category}
              className='text-xs px-2 py-1 hover:bg-gray-100 cursor-pointer'
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Input */}
      <Input
        className='flex-1 bg-gray-100 text-xs text-black h-full px-2 border-none rounded-none focus:ring-primary focus:ring-1 focus:ring-offset-0 transition-colors'
        placeholder={`Search ${APP_NAME || 'Site'}`}
        name='q'
        type='search'
        aria-label='Search input'
      />

      {/* Search Button */}
      <button
        type='submit'
        className='bg-gray-100 text-black rounded-s-none rounded-e-md h-full px-2 flex items-center justify-center hover:bg-gray-200 transition-colors'
        aria-label='Submit search'
      >
        <SearchIcon className='w-4 h-4 text-gray-600' />
      </button>
    </form>
  )
}
