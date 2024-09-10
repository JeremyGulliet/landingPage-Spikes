import FeaturesCards from "./FeaturesCards";
import FeaturesTitle from "./FeaturesTitle";

export default function Features() {
    return (
      <section
        id="Features"
        className="flex flex-col justify-center items-center px-5 gap-20"
      >
        <FeaturesTitle />
        <FeaturesCards />
      </section>
    );
}