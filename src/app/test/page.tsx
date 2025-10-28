export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Test Page Works!</h1>
      <p>If you can see this, Next.js is working correctly.</p>
      <p>Build time: {new Date().toISOString()}</p>
    </div>
  )
}