"use client";
import { useGetMovies } from "@/hooks/useMovies";
import Card from "../components/Card";

export default function ListMovie() {
  const data = useGetMovies();
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-5 gap-2">
        {data?.results?.map((item, index) => (
          <Card image={item.poster_path} id={item.id} popularity={item.popularity} title={item.title} key={item.id} />
        ))}
      </div>
    </>
  );
}
