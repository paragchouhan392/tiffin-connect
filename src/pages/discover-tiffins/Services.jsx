import { tiffinServices } from "../../../data/services";

export function Services() {
  return (
    <>
      {tiffinServices.map((service) => (
        <div key={service.id} className="tiffin-card">
          <img src={service.image} className="tiffin-img" />
          <h3 className="tiffin-title">{service.name}</h3>
          <p className="tiffin-desc">{service.desc}</p>
          <button className="view-btn">View Details</button>
        </div>
      ))}
    </>
  );
}
