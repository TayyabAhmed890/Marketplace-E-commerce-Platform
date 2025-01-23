export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <>
       <section className='bg-[#F6F5FF]'>
    <div className='h-[286px] max-w-[1180px] px-9 mx-auto bg-[#F6F5FF] flex flex-col justify-center'>
      <h1 className='text-2xl font-bold'>Products</h1>
      <div className='flex items-center gap-3'>
        <h1>Pages</h1>
        <h1>Shop Grid Default</h1>
      </div>
    </div>
  </section>
     {children}
     </>
    );
  }