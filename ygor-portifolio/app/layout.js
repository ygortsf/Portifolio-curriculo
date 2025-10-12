import { Header } from "@/componentes/header";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
