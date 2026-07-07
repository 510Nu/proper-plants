import PlantCard from "./PlantCard";

export default function PlantGrid({ plants, addToCart }) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
