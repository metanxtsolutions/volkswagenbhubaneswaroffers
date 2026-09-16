import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-vw-cyan-dark">Error 404</p>
      <h1 className="mt-3 text-3xl font-bold text-vw-blue sm:text-4xl">This page has taken a detour</h1>
      <p className="mt-4 max-w-lg text-slate-600">
        The page you are looking for is not here. Head back to the homepage or see the running Volkswagen offers in
        Bhubaneswar.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="rounded-full bg-vw-blue px-7 py-3 font-bold text-white transition hover:bg-vw-blue-400">
          Go to homepage
        </Link>
        <Link
          href="/offers"
          className="rounded-full border-2 border-vw-blue px-7 py-3 font-bold text-vw-blue transition hover:bg-vw-blue hover:text-white"
        >
          See current offers
        </Link>
      </div>
    </main>
  );
}
