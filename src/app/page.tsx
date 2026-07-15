const BUILD_SHA = process.env.NEXT_PUBLIC_BUILD_SHA ?? "local";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-xl flex-col items-start gap-6">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          ● live
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Cynthia
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Customer-feedback SaaS for small software teams — a hosted feedback
          board, public changelog, and light analytics. Collect requests, let
          users vote, and close the loop.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Foundation is up: repo scaffolded, CI/CD deploying on every push to
          main. Auth &amp; the first feature slice come next.
        </p>
        <code className="rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
          build {BUILD_SHA}
        </code>
      </main>
    </div>
  );
}
