import MovieLinkBox from "@/components/movielinkbox/MovieLinkBox";

export default function Home() {
  return (
    <section className="
    bg-amber-700
    flex flex-col justify-center
    w-full
    h-full
    p-3
    ">
    <article className="text-center">Please paste your movie link</article>
    <MovieLinkBox/>
    </section>
  );
}
