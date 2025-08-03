import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // or use a custom SVG

const Footer = () => {
  return (
    <footer className="bg-white text-black px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left: Logo & CTA */}
        <div className="flex flex-col justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight">
            Lads <span className="text-green-600">On Tours</span>
            <span className="align-super text-xs">®</span>
          </Link>

          <div className="mt-24">
            <p className="text-sm uppercase tracking-widest mb-2 text-gray-500">
              Planning Your Next Adventure?
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-end gap-2 text-[48px] font-bold tracking-tight border-b border-black hover:text-gray-800 transition-all">
              LET'S TALK
              <ArrowUpRight className="w-10 h-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right: Address & Links */}
        <div className="text-right space-y-8">
          <div>
            <h4 className="uppercase text-sm font-medium text-gray-500">
              Address
            </h4>
            <p className="mt-1 text-sm">
              Meghalaya Shillong
              <br />
              793004
            </p>
          </div>

          <div className="space-y-1">
            <Link
              href="https://instagram.com"
              className="block text-sm hover:underline">
              Instagram
            </Link>
            <Link
              href="https://linkedin.com"
              className="block text-sm hover:underline">
              LinkedIn
            </Link>
            <Link href="/careers" className="block text-sm hover:underline">
              Careers
            </Link>
          </div>
          <div className="space-y-1">
            <Link
              href="https://www.instagram.com/iamwiezy/"
              target="_blank"
              className="block text-sm">
              Developed By <span className="text-green-600">@Bantei</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
