export default function Page() {
  return (
    <main className="flex flex-col gap-3">
      <h1>Protected</h1>
      <a href="/auth">sign out</a>
      <a href="/">public route</a>
    </main>
  );
}
