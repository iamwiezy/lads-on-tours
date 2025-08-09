import { allPackages } from "@/lib/data/packages";
import { notFound } from "next/navigation";
import ImageGallery from "@/components/ImageGallery";

interface Props {
  params: { slug: string };
}

// For static site generation
export function generateStaticParams() {
  return allPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

const Page = ({ params }: Props) => {
  const pkg = allPackages.find((p) => p.slug === params.slug);
  if (!pkg) return notFound();

  const filledStars = "★".repeat(Math.floor(pkg.rating));
  const emptyStars = "☆".repeat(5 - Math.floor(pkg.rating));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Top Section: Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <ImageGallery images={pkg.images} title={pkg.title} />

        {/* Info Section */}
        <div className="space-y-4 lg:ml-36">
          <h1 className="text-3xl font-bold">{pkg.title}</h1>
          <h2 className="text-gray-600">{pkg.subtitle}</h2>
          <p className="text-sm text-gray-500">{pkg.peopleJoined}</p>

          <div className="text-2xl font-semibold text-green-600">
            Rs. {pkg.price.toLocaleString("en-IN")}/-
          </div>
          <div className="text-sm line-through text-gray-400">
            Rs. {pkg.originalPrice.toLocaleString("en-IN")}/-
          </div>

          <div className="flex items-center gap-2 text-sm text-yellow-500">
            {filledStars + emptyStars}
            <span className="text-gray-600">({pkg.reviewsCount} reviews)</span>
          </div>

          <p className="text-sm text-gray-700">{pkg.description}</p>

          <div className="flex items-center gap-2">
            <a href="tel:+919485431169">
              <button className="border px-4 py-2 rounded bg-green-600 hover:bg-green-800 text-white">
                Call to Book
              </button>
            </a>
          </div>

          <p className="text-xs text-gray-500">Category: {pkg.category}</p>
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
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {pkg.tripDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
