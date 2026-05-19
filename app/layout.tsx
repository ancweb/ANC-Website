import "./globals.css";

export const metadata = {
  title: "AnC Council IIT Kanpur",
  description: "Official website of AnC Council IIT Kanpur",
  verification: {
    google: "cDZiuecVhr0neGXyQwLYAYkv_2zT5CfCiVJHkmnnFuU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}