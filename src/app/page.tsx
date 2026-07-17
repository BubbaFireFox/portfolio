import Boot from "@/components/Boot";
import PortfolioTabs from "@/components/PortfolioTabs";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      <header className="mb-14 border border-[var(--line)] bg-[var(--panel)] p-6">
        <Boot />
      </header>

      <PortfolioTabs />

      <footer className="mt-14 flex gap-5 text-sm">
        <a href="https://github.com/BubbaFireFox" target="_blank" rel="noopener noreferrer" className="text-[var(--green)] hover:underline">github</a>
        <a href="mailto:kirkpatton3@gmail.com" className="text-[var(--green)] hover:underline">email</a>
      </footer>
    </main>
  );
}
