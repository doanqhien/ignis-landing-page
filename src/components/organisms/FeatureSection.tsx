import { FeatureCard } from '../molecules/FeatureCard';
import { WireframeIcon } from '../atoms/WireframeIcon';
import { Button } from '../atoms/Button';

export const FeatureSection = () => {
  const features = [
    {
      title: "EFFICIENT",
      description: "Bringing the world closer in seconds with pioneering hypersonic flight technology.",
      icon: <WireframeIcon type="efficient" />
    },
    {
      title: "SCALABLE",
      description: "Sovereign propulsion enabling next-generation defence and commercial applications.",
      icon: <WireframeIcon type="scalable" />
    },
    {
      title: "AFFORDABLE",
      description: "Our solutions deliver exceptional reliability, scaling seamlessly for the edge of possible.",
      icon: <WireframeIcon type="affordable" />
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full mb-16">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <p className="text-xs text-zinc-500 tracking-[0.1em] uppercase">Ready to ignite?</p>
        <Button>
          CONTACT US <span className="text-zinc-500">→</span>
        </Button>
      </div>
    </section>
  );
};