export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* overflow-hiddenを削除し、最小の高さを確保する設定に変更 */}
      <body className="antialiased m-0 p-0 min-h-screen bg-white text-black">
        {children}
      </body>
    </html>
  );
}
