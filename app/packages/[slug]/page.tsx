import { allPackages } from "@/lib/data/packages";
import { notFound } from "next/navigation";
import ImageGallery from "@/components/ImageGallery";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return allPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

const Page = ({ params }: Props) => {
  const pkg = allPackages.find((p) => p.slug === params.slug);
  if (!pkg) return notFound();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Top Section: Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Image Gallery */}
        <ImageGallery images={pkg.images} title={pkg.title} />

        {/* Info Section */}
        <div className="space-y-4 lg:ml-36">
          <h1 className="text-3xl font-bold">{pkg.title}</h1>
          <h2 className="text-gray-600">{pkg.subtitle}</h2>
          <p className="text-sm text-gray-500">{pkg.peopleJoined}</p>

          <div className="text-2xl font-semibold text-green-600">
            Rs. 8,000/-
          </div>
          <div className="text-sm line-through text-gray-400">Rs. 18,000/-</div>

          <div className="flex items-center gap-2 text-sm text-yellow-500">
            ★★★★☆ <span className="text-gray-600">(55 reviews)</span>
          </div>

          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>

          <div className="flex items-center gap-2">
            <a href="tel:+919876543210">
              <button className="border px-4 py-2 rounded bg-green-600 hover:bg-green-800 text-white">
                Call to Book
              </button>
            </a>
          </div>

          <p className="text-xs text-gray-500">Category: Camp</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <div className="flex gap-6 border-b pb-2 mb-6">
          <button className="font-semibold text-black border-b-2 border-black">
            Description
          </button>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Trip Details:</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
