import "./globals.css";


export const metadata = {
  title: "Hello Currency",
  description: "Your next currency converter application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
