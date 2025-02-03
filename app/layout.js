import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "Web Dev 2 Demos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
