export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background text-foreground">

      <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-foreground" />

      <p className="mt-4 text-sm text-muted-foreground">Loading…</p>

    </div>
  )
}