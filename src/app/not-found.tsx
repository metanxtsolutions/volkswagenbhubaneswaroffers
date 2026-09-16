import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <div className="shell max-w-3xl">
        <p className="kicker">Error 404</p>
        <h1 className="mt-6 text-display font-extralight">This page has taken a detour.</h1>
        <p className="mt-6 text-lead font-light text-ink-soft">
          The page you are looking for is not here. Head back to the homepage, or explore the Volkswagen range.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-vw-blue px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-vw-blue-soft"
          >
            Go to homepage
          </Link>
          <Link
            href="/models"
            className="rounded-full border border-vw-blue px-8 py-4 text-sm font-medium text-vw-blue transition-colors hover:bg-vw-blue hover:text-white"
          >
            Explore models
          </Link>
        </div>
      </div>
    </main>
  );
}
