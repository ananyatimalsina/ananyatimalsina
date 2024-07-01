import snsbeauty from "../../assets/snsbeauty.png";
import FlipCard from "../FlipCard/flipcard";

export default function ImageCarousel() {
  return (
    <FlipCard
      img={snsbeauty}
      component={"AsepriteTool"}
      buttonLink={"https://github.com/ananyatimalsina/AsepriteTool"}
    />
  );
}
