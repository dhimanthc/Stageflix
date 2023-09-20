import dotenv from "dotenv";
import mongoose from "mongoose";
import showModel from "../models/Show.model.js";

dotenv.config({ path: "./../.env" });

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DBURL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
    seedShows();
  })
  .catch((error) => console.error("Failed to connect to DB:", error));

async function seedShows() {
  try {
    const shows = [
      {
        title: "The Phantom of the Opera",
        authors: ["Andrew Lloyd Webber"],
        description: "A haunting love story set in a Paris opera house.",
        date: new Date("2023-06-10"),
        venue: "Majestic Theatre",
        address: "245 W 44th St, New York, NY",
        images: [
          "https://plus.unsplash.com/premium_photo-1677446657603-67e209c5bf41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWNhbCUyMGluc3RydW1lbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["John Smith", "Jane Doe"],
        directors: ["Michael Smith"],
        producers: ["ABC Productions"],
        productionCompanies: ["XYZ Theatre Company"],
        genre: ["Musical", "Romance"],
        duration: "2 hours 30 minutes",
        rating: 4.5,
        reviews: ["Amazing performance!", "Highly recommended."],
        ticketsAvailable: 100,
        ticketPrice: 50.0,
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Hamlet",
        authors: ["William Shakespeare"],
        description: "A tragedy about a Danish prince seeking revenge.",
        date: new Date("2023-07-15"),
        venue: "Royal Shakespeare Theatre",
        address: "Waterside, Stratford-upon-Avon, UK",
        images: [
          "https://plus.unsplash.com/premium_photo-1684923604075-a2c2b45f72aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxzdGFnZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1597953066321-9bf0e32348fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
        ],
        cast: ["David Johnson", "Sarah Thompson"],
        directors: ["Emily Wilson"],
        producers: ["Shakespeare Productions"],
        productionCompanies: ["Royal Shakespeare Company"],
        genre: ["Play", "Tragedy"],
        duration: "3 hours",
        rating: 4.2,
        reviews: ["Powerful performance!", "Captivating storytelling."],
        ticketsAvailable: 80,
        ticketPrice: 35.0,
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "The Lion King",
        authors: ["Elton John", "Tim Rice"],
        description: "A musical based on Disney's animated film.",
        date: new Date("2023-08-20"),
        venue: "Lyceum Theatre",
        address: "21 Wellington St, London, UK",
        images: [
          "https://images.unsplash.com/photo-1601902186937-b6c743ae2cd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          "https://images.unsplash.com/photo-1519682718457-c82ce8296645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Michael Brown", "Emma Johnson"],
        directors: ["Sarah Davis"],
        producers: ["Disney Theatrical Productions"],
        productionCompanies: ["West End Productions"],
        genre: ["Musical", "Family"],
        duration: "2 hours 45 minutes",
        rating: 4.8,
        reviews: ["Spectacular show!", "Unforgettable experience."],
        ticketsAvailable: 120,
        ticketPrice: 60.0,
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Wicked",
        authors: ["Stephen Schwartz"],
        description:
          "A captivating musical about the untold story of the Witches of Oz.",
        date: new Date("2023-09-25"),
        venue: "Gershwin Theatre",
        address: "222 W 51st St, New York, NY",
        images: [
          "https://images.unsplash.com/photo-1651075900438-e6540186e842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHx0aGVhdHJlJTIwcGxheXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1576724196706-3f23f51ea351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Jessica Thompson", "Matthew Johnson"],
        directors: ["Robert Anderson"],
        producers: ["Universal Stage Productions"],
        productionCompanies: ["Broadway Productions"],
        genre: ["Musical", "Fantasy"],
        duration: "2 hours 45 minutes",
        rating: 4.7,
        reviews: ["Magical performance!", "Absolutely spellbinding."],
        ticketsAvailable: 150,
        ticketPrice: 65.0,
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Romeo and Juliet",
        authors: ["William Shakespeare"],
        description: "A tragic love story of two young star-crossed lovers.",
        date: new Date("2023-10-12"),
        venue: "Globe Theatre",
        address: "21 New Globe Walk, London, UK",
        images: [
          "https://plus.unsplash.com/premium_photo-1684831805607-0a0f90d2630c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhlYXRyZSUyMHBsYXlzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1576724196831-c3469e6a67ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Emily Roberts", "Daniel Wilson"],
        directors: ["James Thompson"],
        producers: ["Shakespearean Theatre Company"],
        productionCompanies: ["Globe Productions"],
        genre: ["Play", "Tragedy", "Romance"],
        duration: "3 hours 15 minutes",
        rating: 4.3,
        reviews: ["Timeless masterpiece!", "Emotionally gripping."],
        ticketsAvailable: 100,
        ticketPrice: 40.0,
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Les Misérables",
        authors: ["Claude-Michel Schönberg", "Alain Boublil"],
        description:
          "A musical based on Victor Hugo's epic novel set in 19th-century France.",
        date: new Date("2023-11-20"),
        venue: "Queen's Theatre",
        address: "51 Shaftesbury Ave, London, UK",
        images: [
          "https://images.unsplash.com/photo-1635695563052-02abf47a6ce9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHRoZWF0cmUlMjBwbGF5c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          "https://plus.unsplash.com/premium_photo-1684923604389-b63c611adf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Michael Johnson", "Olivia Davis"],
        directors: ["Sophie Roberts"],
        producers: ["Cameron Mackintosh"],
        productionCompanies: ["West End Productions"],
        genre: ["Musical", "Drama"],
        duration: "3 hours 30 minutes",
        rating: 4.6,
        reviews: ["Incredible performance!", "Powerful storytelling."],
        ticketsAvailable: 120,
        ticketPrice: 55.0,
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Hamilton",
        authors: ["Lin-Manuel Miranda"],
        description:
          "A groundbreaking musical about the life of Alexander Hamilton",
        date: new Date("2023-07-20"),
        venue: "Richard Rodgers Theatre",
        address: "226 W 46th St, New York, NY 10036, United States",
        images: [
          "https://images.unsplash.com/photo-1560195183-570e72bb6fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
          "https://images.unsplash.com/photo-1587834423414-9545adae44ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Lin-Manuel Miranda", "Leslie Odom Jr.", "Phillipa Soo"],
        directors: ["Thomas Kail"],
        producers: ["Jeffrey Seller"],
        productionCompanies: ["Hamilton Uptown Limited Liability Company"],
        genre: ["Musical", "Historical"],
        duration: "2 hours 45 minutes",
        rating: 4.8,
        reviews: [
          "An absolute masterpiece!",
          "The performances are outstanding.",
        ],
        ticketsAvailable: 150,
        ticketPrice: 80,
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
    ];
    for (let show of shows) {
      const newShow = new showModel(show);
      await newShow.save();
    }
    console.log("Show data seeded successfully!");
  } catch (error) {
    console.error("Error seeding show data:", error);
  } finally {
    mongoose.disconnect();
  }
}
