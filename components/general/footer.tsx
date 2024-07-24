import { Phone } from "lucide-react";
import LogoSvg from "../svgs/logo-svg";

export default function Footer() {
  return (
    <footer className="p-12 bg-accent text-accent-foreground text-xs">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-5">
          <LogoSvg />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            maiores minus voluptatibus soluta minima. Eius asperiores debitis
            nihil ex error vero laborum illo, exercitationem id illum cupiditate
            dicta quos esse!
          </p>
          <div className="p-5 flex items-center gap-2.5">
            <Phone height={30} width={30} className="text-primary" />
            <div className="flex flex-col gap-2.5 font-bold">
              <h6>Need Help? Call Us</h6>
              <p className="text-base font-bold">+92 123 4567 456</p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
}