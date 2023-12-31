import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { lazy } from "react";
const Card = lazy(() => import("parent-app/Card"));
const ParentPage = lazy(() => import("parent-app/pages/Parent"));

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        child-app<Card>halso</Card>
        <ParentPage />
      </main>
    </>
  );
}
