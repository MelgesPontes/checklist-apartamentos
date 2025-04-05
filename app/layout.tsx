export const metadata = {
  title: "Checklist de Apartamentos",
  description: "Controle e revisão por torre e pavimento",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "sans-serif", margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
