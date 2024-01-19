export default function Person({ name, description }) {
  console.log(name);
  return (
    <div class="Person">
      <h1>{name}</h1>
      <h2>{description}</h2>
    </div>
  );
}
