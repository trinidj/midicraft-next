export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-fit items-center justify-center gap-11">
      {children}
    </main>
  )
}