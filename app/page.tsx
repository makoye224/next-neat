import {
  CarCard,
  ShowMore,
  SearchBar,
  CustomFilter,
  Hero,
  MyPage,
} from "@components";

export default async function Home() {
  return (
    <main className="overflow-hidden text-white ">
      <Hero />
      <MyPage />
    </main>
  );
}
