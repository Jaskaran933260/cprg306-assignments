import "./globals.css";

export const metadata = {
  title: "Web Dev 2 Demos",
  description: "Web Dev 2 Demos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
