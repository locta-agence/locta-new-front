
import { teamMembers } from "@/data/teamMembers";

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

      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative group overflow-hidden"
            style={{ height: "420px" }}
          >
            {/* Image de fond */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-800"
              style={{
                backgroundImage: member.image ? `url(${member.image})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

            {/* Contenu */}
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              {/* Badge rôle */}
              <div className="flex justify-start">
                <div className="border border-white text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {member.role}
                </div>
              </div>

              {/* Nom et description */}
              <div className="text-white space-y-2">
                <h3 className="font-bold text-lg uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-200">
                  {member.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>     
    </main>
  );
}
