import AllProducts from '@/components/Home/AllProducts/AllProducts';
import Filter from '@/components/Home/Filter/Filter';

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <Filter />
      <AllProducts />
    </main>
  );
}
