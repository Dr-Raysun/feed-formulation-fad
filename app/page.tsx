// import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5  ">
          <h1 className="text-5xl font-bold ">
            Welcome to feed formulation app. <br />
            <br />
            Storing everything for you and your needs. All in one place
          </h1>

          <p className="pb-20 ">
            Feed formulation for pigs and birds (poultry) is crucial for
            providing balanced nutrition to support growth, health, and
            productivity. For pigs, key ingredients include protein sources like
            soya beans and energy sources like maize, with varying protein
            levels depending on their growth stage. Weaners need higher protein
            (around 16%), while finishers require less (14%) but more energy. In
            poultry, feed consists of protein sources like fishmeal and energy
            from grains like maize, along with essential vitamins and minerals
            for growth and egg production. Chicks require high protein (20-24%),
            while layers need less (16-18%) but with additional calcium for
            strong eggshells. Both animals rely on carefully balanced diets
            tailored to their age and purpose to optimize health and
            productivity.
          </p>

          <Link
            href="/farmer"
            className="flex  cursor-pointer bg-blue-500 p-5 w-fit "
          >
            Try it for free!
            <ArrowRight className="ml-10 group-hover:animate-pulse  " />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10 ">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support thie video tag
          </video>
        </div>
      </section>

      <p className="text-center font-bold text-xl pt-5">Hi There Note</p>
      <p className="text-center font-light p-2">
        This project was developed to aid Feed production.
      </p>
    </main>
  );
}
