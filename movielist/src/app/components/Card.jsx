import { imageUrl } from "@/lib/api";
import Image from "next/image";

export default function Card({ image, title, series, popularity }) {
  return (
    <>
      <div>
        <Image src={imageUrl + image} alt={title} width="100" height="100" />
        <div>
          <h3>{title}</h3>
          <p>{popularity}</p>
        </div>
      </div>
    </>
  );
}
