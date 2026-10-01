export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col gap-16 min-h-screen">
      {children}
    </main>
  );
}
