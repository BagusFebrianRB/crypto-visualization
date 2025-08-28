import GradientText from "./GradientText";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-inter font-black dark:hidden text-black">
        Add a splash of color!
      </h1>
      <GradientText
        colors={["#ec4899", "#efe35c", "#ec4899", "#efe35c", "#ec4899"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class text-3xl font-inter font-black hidden dark:block"
      >
        Add a splash of color!
      </GradientText>
      <table className="border-collapse border border-gray-400 ...">
        <thead>
          <tr>
            <th className="border border-gray-300 ...">State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 ...">Indiana</td>
          </tr>
          <tr>
            <td className="border border-gray-300 ...">Ohio</td>
          </tr>
          <tr>
            <td className="border border-gray-300 ...">Michigan</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
