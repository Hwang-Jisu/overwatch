import Hero from './Hero';

const HeroGrid = () => {
  const heroes = Array.from({ length: 32 }, (_, i) => i + 1);
  
  return (
    <div className='heros inner'>
      {heroes.map((i) => (
        <Hero key={i} index={i} />
      ))}
    </div>
  );
};

export default HeroGrid;
