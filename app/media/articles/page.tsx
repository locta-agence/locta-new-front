import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "@/data/blogArticles";

export default function Page() {
  return (
    <main className="px-8 py-10">
      <h1 className="mb-8 text-3xl font-bold">Articles (TODO)</h1>

      {blogArticles.length === 0 ? (
        <p className="text-black/70">Aucun article disponible pour le moment.</p>
      ) : (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <Link
              key={article.id}
              href={`/media/articles/${article.id}`}
              className="group overflow-hidden rounded-lg border border-black/10 bg-white"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={article.imageBackground}
                  alt={article.nom}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold">{article.nom}</h2>
                <p className="mt-2 text-sm text-black/80">
                  {article.description}
                </p>
                <p className="mt-3 text-sm font-semibold underline">
                  Lire l&apos;article
                </p>
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
