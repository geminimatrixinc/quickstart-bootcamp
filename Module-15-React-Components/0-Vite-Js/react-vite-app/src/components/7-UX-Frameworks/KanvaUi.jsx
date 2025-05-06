import { useState } from "react";
import { Stage, Layer, Star, Text } from "react-konva";

// npm install react-konva konva
const InteractiveCanvas = () => {
  const [stars, setStars] = useState([
    { id: 1, x: 150, y: 150, rotation: 0, scale: 1 },
  ]);

  const handleDragMove = (e, id) => {
    const updatedStars = stars.map((star) =>
      star.id === id
        ? { ...star, x: e.target.x(), y: e.target.y() }
        : star
    );
    setStars(updatedStars);
  };

  const handleWheel = (e, id) => {
    e.evt.preventDefault();
    const scaleBy = 1.1;
    const updatedStars = stars.map((star) =>
      star.id === id
        ? {
            ...star,
            scale: e.evt.deltaY > 0 ? star.scale / scaleBy : star.scale * scaleBy,
          }
        : star
    );
    setStars(updatedStars);
  };

  const addStar = () => {
    const newStar = {
      id: stars.length + 1,
      x: Math.random() * 300 + 50,
      y: Math.random() * 300 + 50,
      rotation: 0,
      scale: 1,
    };
    setStars([...stars, newStar]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Interactive Canvas with Konva.js</h1>
      <button
        onClick={addStar}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Add Star
      </button>
      <Stage width={window.innerWidth} height={400} style={{ border: "1px solid #ddd" }}>
        <Layer>
          <Text text="Drag and scroll to resize the stars!" x={10} y={10} fontSize={16} />
          {stars.map((star) => (
            <Star
              key={star.id}
              x={star.x}
              y={star.y}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#FFD700"
              draggable
              rotation={star.rotation}
              scaleX={star.scale}
              scaleY={star.scale}
              onDragMove={(e) => handleDragMove(e, star.id)}
              onWheel={(e) => handleWheel(e, star.id)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default InteractiveCanvas;