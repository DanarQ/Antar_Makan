import "./FoodCategoryCard.css";

interface FoodCategoryCardProps {
  imageSrc: string;
  title: string;
  url?: string;
}
function FoodCategoryCard({ imageSrc, title, url }: FoodCategoryCardProps) {
  return (
    <a href={url} className="card">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
    </a>
  );
}
export default FoodCategoryCard;
