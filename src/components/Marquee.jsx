export default function Marquee() {
  const items = [
    "REACT", "NODE.JS", "EXPRESS.JS", "MONGODB", "PYTHON", "JAVA", "GEMINI AI", 
    "FULL STACK DEV", "CGPA 7.02", "PROBLEM SOLVER"
  ];
  
  // Duplicate array to ensure seamless infinite scroll
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {repeatedItems.map((item, index) => (
          <span key={index} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
