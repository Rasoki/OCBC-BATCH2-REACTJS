import "./styles/card.css";
const cardStyle = {
  backgroundColor: "#777",
  marginBottom: "1em",
  padding: "0.5em 1em",
  borderRadius: "2em",
};

function Card(props) {
  return (
    <div style={{ ...cardStyle, fontSize: "0.8" }}>
      <div>
        <h3>{props.title}</h3> by {props.userId}
      </div>
      <div>{props.completed ? "Complete" : "Pending"}</div>
    </div>
  );
}

export default Card;
