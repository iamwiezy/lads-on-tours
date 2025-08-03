interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => (
  <div className={`p-6 rounded-lg ${color}`}>
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default ServiceCard;
