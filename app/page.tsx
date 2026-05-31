import Image from "next/image";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Premium Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-xl font-bold tracking-tight text-transparent dark:from-purple-400 dark:to-indigo-400">
              ClerkNext
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
        <div className="relative isolate">
          {/* Decorative background blur */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="flex flex-col items-center gap-6">
            <Image
              className="dark:invert mb-4"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={24}
              priority
            />
            
            <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Authentication powered by Clerk & Next.js
            </h1>
            
            <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              A premium, secure, and modern authentication template built with Next.js App Router and Clerk. Ready for your next big idea.
            </p>

            <Show when="signed-out">
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <SignUpButton mode="modal">
                  <button className="flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 cursor-pointer">
                    Get Started
                  </button>
                </SignUpButton>
                <a
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
                  href="https://clerk.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </div>
            </Show>

            <Show when="signed-in">
              <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-zinc-200/60 bg-white/40 p-8 backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-950/40">
                <p className="text-zinc-600 dark:text-zinc-400">
                  🎉 Welcome back! You are successfully signed in.
                </p>
                <div className="flex items-center gap-3">
                  <UserButton showName />
                </div>
              </div>
            </Show>
          </div>
        </div>
      </main>
    </div>
  );
}

