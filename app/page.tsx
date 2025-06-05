"use client";

import InteractiveAvatar from "@/components/InteractiveAvatar";

export default function Home() {
  return (
    <div className="bg-white">
      <section className="max-w-5xl mx-auto px-4 py-8 space-y-4">
        <img
          src="/nlace-logo.svg"
          alt="NLACE logo"
          className="h-12 mx-auto"
        />
        <h1 className="bg-[#0f1011] text-white text-4xl md:text-6xl font-grotesk rounded-lg p-6">
          Hablemos de IA
        </h1>
        <p className="bg-[#5869f7] text-white rounded-md p-4 text-base md:text-lg opacity-80 font-sans">
          Estoy aquí para guiarte en el proceso de integrar Inteligencia Artificial para tu empresa. Preguntame lo que quieras
        </p>
      </section>
      <section className="bg-gradient-to-b from-[#fefbff] to-[#ffffff] py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div
            id="avatar-container"
            className="w-full mx-auto aspect-video rounded-xl shadow-md overflow-hidden"
          >
            <InteractiveAvatar />
          </div>
        </div>
      </section>
    </div>
  );
}
