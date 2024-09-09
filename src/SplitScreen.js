function SplitScreen({ children, leftweight = 1, rightweight = 1 }) {
  const container = {
    display: "flex",
  };

  //   const pane = {
  //     flex: 1,
  //   };

  const [left, right] = children;
  return (
    <div style={container}>
      <div style={{ flex: leftweight }}>{left}</div>
      <div style={{ flex: rightweight }}>{right}</div>
    </div>
  );
}

export default SplitScreen;
