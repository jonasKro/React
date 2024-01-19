export default function Card({ fname, lname, descr }) {
  return (
    <div class="CardWrapper">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        class="CardImg"
      ></img>
      <div class="CardContent">
        <div class="ContentName">
          {fname} {lname}
        </div>
        <div class="ContentDescription">{descr}</div>
      </div>
    </div>
  );
}
