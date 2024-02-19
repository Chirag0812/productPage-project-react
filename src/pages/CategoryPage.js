import { useState } from 'react';

import Sorting from '../components/home/Sorting';
import Category from '../components/home/Category';
import Products from '../components/home/Products';

function AllCategory() {
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      <Sorting setSort={setSort} />
      <div className="flex container mx-auto gap-x-32 max-sm:flex-col max-md:gap-x-12">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  )
}

export default AllCategory;