import WobbleImage from "@/components/animation/wobble/WobbleImage";

export default function Profile() {
  return (
    <div style={{ width: 350, marginLeft: 100 }}>
      <WobbleImage
        src={"/assets/image/profile.jpg"}
        alt={"profile"}
        priority={true}
      />
    </div>
  );
}
