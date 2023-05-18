import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "./components/pages/Card";
import HeroSection from "./components/pages/HeroSection";
import Scroll from "./components/pages/Scroll";
import CharacterAnimation from "./components/pages/CharacterAnimation";

interface ComponentData {
  id: number;
  component: React.ComponentType;
}

const App: React.FC = () => {
  const components: ComponentData[] = [
    { id: 1, component: Card },
    { id: 2, component: HeroSection },
    { id: 3, component:  Scroll},
    { id: 4, component:  CharacterAnimation},
    // Add more components as needed
  ];

  const [activeComponentIndex, setActiveComponentIndex] = useState<number>(0);

  const handleComponentVisible = (index: number) => {
    if (index === activeComponentIndex) {
      setActiveComponentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {components.map((componentData, index) => (
        <Component
          key={componentData.id}
          component={componentData.component}
          variants={variants}
          active={index <= activeComponentIndex}
          onVisible={() => handleComponentVisible(index)}
        />
      ))}
    </div>
  );
};

interface ComponentProps {
  component: React.ComponentType;
  variants: { [key: string]: any };
  active: boolean;
  onVisible: () => void;
}

const Component: React.FC<ComponentProps> = ({
  component: Component,
  variants,
  active,
  onVisible,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView && active) {
      onVisible();
    }
  }, [inView, active, onVisible]);

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={active ? "visible" : "hidden"}
        variants={variants}
      >
        <Component />
      </motion.div>
    </div>
  );
};

export default App;
