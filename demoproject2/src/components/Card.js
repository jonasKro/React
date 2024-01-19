export default function Card({ name, title, imglink }) {
  return (
    <div>
      <div class="CardWrapper">
        <div class="CardContent">
          <div class="ContentName">{name}</div>
          <div class="ContentDescription">{title}</div>
        </div>
        <img src={imglink} class="CardImg"></img>
      </div>
    </div>
  );
}
