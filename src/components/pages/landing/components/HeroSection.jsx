export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to the Future</h1>
        <p className="text-xl md:text-2xl mb-8">Experience the power of innovation and creativity</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
          Get Started
        </button>
      </div>
    </section>
  )
}
