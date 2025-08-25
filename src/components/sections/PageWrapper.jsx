function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-4 sm:pt-8 max-w-[90rem]">
        {children}
      </header>
    </div>
  );
}

export default PageWrapper;
