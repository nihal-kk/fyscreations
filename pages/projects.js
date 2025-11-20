import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const posterImages = [
    "/photos/pic_1.png",
    "/photos/pic_2.jpg",
    "/photos/pic_3.jpg",
    "/photos/pic_4.jpg",
    "/photos/pic_5.png",
    "/photos/pic_6.jpg",
    "/photos/pic_7.jpg",
    "/photos/pic_8.jpg",
    "/photos/pic_9.jpg",
    "/photos/pic_10.png",
    "/photos/pic_11.jpg",
    "/photos/pic_12.jpg",
    "/photos/pic_13.jpg",
    "/photos/pic_14.jpg",
    "/photos/pic_15.png",
    "/photos/pic_16.jpg",
    "/photos/pic_17.jpg",
    "/photos/pic_18.jpg",
    "/photos/pic_19.jpg",
    "/photos/pic_20.jpg",
    "/photos/pic_21.jpg",
    "/photos/pic_22.jpg",
    "/photos/pic_23.jpg",
    "/photos/pic_24.jpg",
    "/photos/pic_25.jpg",
    "/photos/pic_26.jpg",
    "/photos/pic_27.jpg",
    "/photos/pic_28.jpg",
    "/photos/pic_29.jpg",
    "/photos/pic_30.jpg",
    "/photos/pic_31.jpg",
    "/photos/pic_32.jpg",
    "/photos/pic_33.jpg",
    "/photos/pic_34.jpg",
    "/photos/pic_35.jpg",
    "/photos/pic_36.jpg",
    "/photos/pic_37.jpg",
    "/photos/pic_38.jpg",
    "/photos/pic_39.jpg",
    "/photos/pic_40.jpg",
    "/photos/pic_41.jpg",
  ];

  return (
    <>
      <Head>
        <title>Projects | Venmenaden</title>
        <meta
          name="description"
          content="Explore Venmenaden’s typography, logo design, and graphic design projects."
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <div
        className={
          isDarkMode
            ? "bg-gray-900 text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main className="flex flex-col items-center justify-center py-20 px-6">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className="mt-4 max-w-2xl text-center">
            Here you can explore my best works in typography, logo design,
            posters, and digital art.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl">
            {posterImages.map((src, idx) => (
              <div
                key={idx}
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg bg-black" // ✅ black background
              >
                <img
                  src={src}
                  alt={`Poster ${idx + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </main>
        <div className="min- flex items-center justify-center bg-gray-900">
      <Link
        href="/"
        className="px-6 py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition"
      >
        Go To Main Page
      </Link>
    </div>
      </div>
    </>
  );
}
