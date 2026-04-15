
export default function Page() {
  return (
    <main className="p-[40px]">
      <div>
        <h1 className="font-bold text-6xl uppercase">à propos de nous</h1>
        <p className="mt-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mb-[40px]"/>
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "500px", maxHeight: "550px" }}
        >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/ski.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        </div>
      </div>

      <div className="mt-[60px]">
        <h2 className="font-bold text-6xl uppercase">notre team</h2>
        <p className="mt-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div> 

      <div>
      </div>     
    </main>
  );
}
