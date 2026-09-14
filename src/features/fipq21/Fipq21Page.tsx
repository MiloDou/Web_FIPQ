import afichemFipq21 from "@/assets/fipq21/afiche-fipq21.jpg";

export function Fipq21Page() {
  return (
    <div className="bg-[#0a1222] min-h-screen flex items-center justify-center p-4">
      <img
        src={afichemFipq21}
        alt="FIPQ 21"
        className="w-full h-auto max-h-[90vh] object-contain shadow-2xl"
      />
    </div>
  );
}
