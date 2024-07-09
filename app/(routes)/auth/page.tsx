"use client";

import Input from "@/components/input";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(2),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        signIn();
        router.push("/dashboard");
        toast.success("Success");
      })
      .catch((error: any) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const login = useCallback(async () => {
  //   try {
  //     await signIn("credentials", {
  //       email,
  //       password,
  //       redirect: false,
  //       callbackUrl: "/",
  //     });

  //     router.push("/dashboard");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [email, password, router]);

  // const register = useCallback(async () => {
  //   try {
  //     await axios.post("/api/register", {
  //       email,
  //       name,
  //       password,
  //     });
  //     login();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [email, name, password, login]);

  return (
    <div className="bg-[url('/display4.jpg')] bg-no-repeat h-screen w-full bg-fixed bg-center bg-cover">
      <div className="flex flex-col items-center justify-center h-screen bg-yellow-900/50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black/70 p-4 sm:p-10 rounded min-w-96 max-md:w-full max-md:h-full flex flex-col items-center justify-center"
        >
          <h2 className="pb-6 text-xl font-bold text-white">
            {/* {variant === "login" ? "Logga in dig" : "Registrera dig"} */}
            Registrera dig
          </h2>
          <div className="flex flex-col gap-4 sm:w-80">
            {/* {variant === "register" && ( */}
            {/* <Input
                label="Användarnamn"
                {...register("name")}
                id="name"
                type="text"
              /> */}
            {/* )} */}
            {/* <Input
              label="Email"
              id="email"
              {...register("email")}
              type="email"
            />
            <Input
              label="Lösenord"
              id="password"
              type="password"
              {...register("password")}
            /> */}
            <div className="relative">
              <input
                type="text"
                id="name"
                {...register("name")}
                className="
            block
            rounded-md
            px-6
            pt-6
            pb-1
            w-full
            text-md
            appearance-none
            bg-neutral-800
            text-white
            focus:outline-none
            focus:ring-0
            peer
            "
                placeholder=" "
              />
              <label
                className="
            absolute
            text-md
            text-zinc-300
            duration-150
            transform
            -translate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            "
                htmlFor="email"
              >
                Användarnamn
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                {...register("email")}
                className="
            block
            rounded-md
            px-6
            pt-6
            pb-1
            w-full
            text-md
            appearance-none
            bg-neutral-800
            text-white
            focus:outline-none
            focus:ring-0
            peer
            "
                placeholder=" "
              />
              <label
                className="
            absolute
            text-md
            text-zinc-300
            duration-150
            transform
            -translate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            "
                htmlFor="email"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="password"
                {...register("password")}
                className="
            block
            rounded-md
            px-6
            pt-6
            pb-1
            w-full
            text-md
            appearance-none
            bg-neutral-800
            text-white
            focus:outline-none
            focus:ring-0
            peer
            "
                placeholder=" "
              />
              <label
                className="
            absolute
            text-md
            text-zinc-300
            duration-150
            transform
            -translate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            "
                htmlFor="email"
              >
                Lösenord
              </label>
            </div>

            <div className="flex gap-2 mt-6">
              {/* <button
                onClick={() => router.push("/")}
                className="bg-gray-700 text-white rounded w-full transition hover:bg-opacity-90 p-3 font-bold"
              >
                Tillbaka
              </button> */}
              <button
                type="submit"
                // onClick={variant === "login" ? login : register}
                className="bg-yellow-900 text-white rounded w-full transition hover:bg-opacity-90 p-3 font-bold"
              >
                {/* {variant === "login" ? "Logga in" : "Skapa konto"} */}
                Skapa konto
              </button>
            </div>

            {/* <p className="text-neutral-500">
              {variant === "login"
                ? "Har du inte ett konto än?"
                : "Har du redan ett konto?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline underline-offset-4 cursor-pointer"
              >
                {variant === "login" ? "Skapa konto." : "Logga in."}
              </span>
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
