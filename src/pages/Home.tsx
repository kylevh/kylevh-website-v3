const Home = () => {
    return (
      <section className="min-h-screen w-full p-4 md:p-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {/* About Card */}
        <div className="bg-white backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold text-neutral-950 mb-4">About Me</h2>
          <p className="text-neutral-500">Your introduction here...</p>
        </div>

      </div>
    </section>
    )
  }
  
  export default Home