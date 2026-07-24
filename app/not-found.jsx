import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#0f0303] px-5 text-center text-white">
      <h1 className="text-6xl font-black">404</h1>

      <h2 className="mt-4 text-xl font-bold">Page Not Found</h2>

      <p className="mt-3 max-w-md text-zinc-400">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
      >
        Go Home
      </Link>
    </section>
  );
}
