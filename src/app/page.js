import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h2>Root route</h2>
      <Image
        src="/vercel.svg"
        width={500}
        height={400}
        alt="random image"
      />
    </Fragment>
  );
}
