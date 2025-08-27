import GradientText from "./GradientText";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <GradientText
        colors={["#ec4899", "#efe35c", "#ec4899", "#efe35c", "#ec4899"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class text-3xl font-black font-asimovian"
      >
        Add a splash of color!
      </GradientText>
    </div>
  );
}
