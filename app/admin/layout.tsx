import Adminlayout from "./Adminlayout";
// import '../admin/style/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Adminlayout>
          {/* Flexbox to center the section */}
          <section className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-4xl">
              {children}  {/* Render the children inside the section */}
            </div>
          </section>
        </Adminlayout>
      </body>
    </html>
  );
}
