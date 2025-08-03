import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  link?: string; // 👈 new prop to receive the link
  onClick?: () => void;
};

const Button = ({
  type = "button",
  title,
  icon,
  variant,
  full,
  link,
  onClick,
}: ButtonProps) => {
  const className = `flexCenter gap-3 rounded-full border ${variant} ${
    full ? "w-full" : ""
  }`;

  const content = (
    <>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </>
  );

  return link ? (
    <Link href={link} className={className}>
      {content}
    </Link>
  ) : (
    <button type={type} className={className} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
