"use client";

import Input from "@/components/input";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="bg-[url('/display4.jpg')] bg-no-repeat h-screen w-full bg-fixed bg-center bg-cover">
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-900/50">
        <div className="bg-black/70 p-4 sm:p-10 rounded min-w-96 max-md:w-full max-md:h-full flex flex-col items-center justify-center">
          <h2 className="pb-6 text-xl font-bold text-white">
            {variant === "login" ? "Logga in dig" : "Registrera dig"}
          </h2>
          <div className="flex flex-col gap-4 sm:w-80">
            {variant === "register" && (
              <Input
                label="Användarnamn"
                onChange={(e: any) => setName(e.target.value)}
                id="name"
                type="text"
                value={name}
              />
            )}
            <Input
              label="Email"
              onChange={(e: any) => setEmail(e.target.value)}
              id="email"
              type="email"
              value={email}
            />
            <Input
              label="Lösenord"
              onChange={(e: any) => setPassword(e.target.value)}
              id="password"
              type="password"
              value={password}
            />

            <div className="flex gap-2 mt-6">
              <button onClick={() => router.push('/')} className="bg-gray-700 text-white rounded w-full transition hover:bg-opacity-90 p-3 font-bold">
                Tillbaka
              </button>
              <button className="bg-yellow-900 text-white rounded w-full transition hover:bg-opacity-90 p-3 font-bold">
                {variant === "login" ? "Logga in" : "Skapa konto"}
              </button>
            </div>

            <p className="text-neutral-500">
              {variant === "login"
                ? "Har du inte ett konto än?"
                : "Har du redan ett konto?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline underline-offset-4 cursor-pointer"
              >
                {variant === "login" ? "Skapa konto." : "Logga in."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
