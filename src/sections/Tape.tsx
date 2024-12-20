const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Relieble",
];

export const TapeSection = () => {
  return <div>
    {words.map(word => (
      <div key={word}>

      </div>
    ))}
  </div>
};
