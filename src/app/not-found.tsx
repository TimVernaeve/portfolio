"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import Icon from "@/components/Icon";

import { fadeInTop } from "@/helpers/animations";

const NotFoundPage = () => {
  return (
    <main className="flex h-full flex-col gap-8 box-border p-8">
      <motion.div
       className="text-xl"
        initial="hidden"
        animate="visible"
        variants={fadeInTop}
       >
        <Link href="/">Tim Vernaeve</Link>
      </motion.div>
      <section className="flex h-full w-full flex-col items-center justify-center gap-16">
        <div>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <h1 className="text-xxl md:text-display font-bold border-b-2  sm:border-b-0 sm:border-r-2 pb-8 sm:pb-0 sm:pr-8">
              404
            </h1>
            <h2 className="text-xl md:text-xxl font-bold">Page not found</h2>
          </div>
        </div>
        <Link
          href="/"
          className="flex gap-4 h-fit w-fit items-center justify-center uppercase text-s outline outline-2 rounded-full px-4 py-3 hover:text-off-black hover:bg-white"
        >
          <div className="flex relative w-6 h-6">
            <Icon name="arrow-down" className="w-6 h-6 rotate-90" />
          </div>
          back to homepage
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
