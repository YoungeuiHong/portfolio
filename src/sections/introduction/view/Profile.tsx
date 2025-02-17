"use client";
import WobbleImage from "@/components/animation/wobble/WobbleImage";

export default function Profile() {
  return (
    <div
      style={{
        width: "30vw",
        marginLeft: "5vw",
      }}
    >
      <WobbleImage
        src={"/assets/image/profile.webp"}
        alt={"profile"}
        priority={true}
      />
    </div>
  );
}
