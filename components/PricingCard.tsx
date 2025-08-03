interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  color: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  color,
}: PricingCardProps) => (
  <div className={`p-6 rounded-lg ${color}`}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold mb-1">
      {price}
      <span className="text-sm">/Project</span>
    </p>
    <p className="text-sm mb-4">{description}</p>
    <ul className="mb-4 list-disc list-inside space-y-1 text-sm">
      {features.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    <button className="bg-lime-400 text-black px-4 py-2 rounded hover:bg-lime-500">
      Choose Plan
    </button>
  </div>
);

export default PricingCard;
