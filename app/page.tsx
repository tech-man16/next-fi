import React from "react";
import { ChooseFile } from "./components/ChooseFile";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 transition-colors">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <ChooseFile />
      </div>
    </main>
  );
}