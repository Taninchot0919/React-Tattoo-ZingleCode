import "./TattooItem.css";

function TattooItem(props) {
  const { tattoo, onTattooClick } = props;
  return (
    <div
      className="tattoo-item"
      onClick={() => {
        onTattooClick(tattoo);
      }}
    >
      <img src={tattoo.thumbnailUrl} />
      <h4>{tattoo.title}</h4>
    </div>
  );
}

export default TattooItem;
