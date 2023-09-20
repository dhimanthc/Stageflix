import { Link } from "react-router-dom";

export default function Theatre() {
  const theatres = [
    {
      _id: "1",
      name: "Royal Theatre",
      address: "123 Main Street, City",
      images: [
        "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRoZWF0cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "image2.jpg",
      ],
      capacity: 500,
      contact_information: "info@royaltheatre.com",
      technical_specification: "High-quality sound and lighting systems",
      availability: "Open all year",
      rental_fees: 2000,
      rating: 4.5,
      reviews: ["Great venue!", "Excellent facilities"],
      amenities: "Parking, Concession stands",
      accessibility: "Wheelchair accessible",
    },
    {
      _id: "2",
      name: "Globe Theatre",
      address: "456 Elm Street, City",
      images: [
        "https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRoZWF0cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "image4.jpg",
      ],
      capacity: 300,
      contact_information: "info@globetheatre.com",
      technical_specification: "Traditional stage design",
      availability: "Open during theater season",
      rental_fees: 1500,
      rating: 4.2,
      reviews: ["Historic theater with great atmosphere"],
      amenities: "Bar, Restrooms",
      accessibility: "Limited wheelchair accessibility",
    },
    {
      _id: "3",
      name: "City Arts Center",
      address: "789 Oak Street, City",
      images: [
        "https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhlYXRyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "image6.jpg",
      ],
      capacity: 800,
      contact_information: "info@cityartscenter.com",
      technical_specification: "State-of-the-art audio and visual equipment",
      availability: "Available for private events",
      rental_fees: 3000,
      rating: 4.7,
      reviews: ["Top-notch venue for large events"],
      amenities: "Lounge area, Catering services",
      accessibility: "Fully wheelchair accessible",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        {theatres.map((theatre, index) => {
          return (
            <Link
              style={{ width: "576px" }}
              to={`/theatres/${theatre._id}`}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={theatre.images[0]}
                alt="..."
                style={{ height: "192px" }}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {theatre.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur repellendus, minus cupiditate perspiciatis, aut
                  quo minima odit quia et aliquid architecto vel, esse hic.
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
