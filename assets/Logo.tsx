import Image from "next/image";

const Logo = () => (
  <div className="w-12 h-12">
    <Image
      src="https://drive.google.com/uc?export=view&id=1lLTge0JSl3lP1WsW__XhS6ca7zzLDrMf"
      alt="Picture of the author"
      width={24}
      height={24}
    />
  </div>
);

export { Logo };
