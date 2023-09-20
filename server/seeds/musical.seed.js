import dotenv from "dotenv";
import mongoose from "mongoose";
import musicalModel from "../models/Musical.model.js";

dotenv.config({ path: "./../.env" });

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DBURL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
    seedMusicals();
  })
  .catch((error) => console.error("Failed to connect to DB:", error));

async function seedMusicals() {
  try {
    const musicals = [
      {
        title: "The Phantom of the Opera",
        composers: ["Andrew Lloyd Webber"],
        lyricists: ["Charles Hart", "Richard Stilgoe"],
        book_writers: ["Andrew Lloyd Webber", "Richard Stilgoe"],
        synopsis: "A disfigured composer haunts the grand Paris Opera House.",
        duration: "2 hours 30 minutes",
        images: [
          "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Michael Crawford", "Sarah Brightman"],
        directors: ["Harold Prince"],
        producers: ["Cameron Mackintosh"],
        production_companies: ["Really Useful Group"],
        date_of_production: new Date("1986-10-09"),
        language: "English",
        genre: ["Musical", "Drama"],
        country: "United Kingdom",
        awards: [
          "Tony Award for Best Musical",
          "Olivier Award for Best New Musical",
        ],
        rating: 4.5,
        reviews: ["Amazing show!", "Spectacular performances!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Les Misérables",
        composers: ["Claude-Michel Schönberg"],
        lyricists: ["Alain Boublil", "Jean-Marc Natel", "Herbert Kretzmer"],
        book_writers: [
          "Claude-Michel Schönberg",
          "Alain Boublil",
          "Jean-Marc Natel",
        ],
        synopsis:
          "In 19th-century France, Jean Valjean seeks redemption while pursued by Inspector Javert.",
        duration: "3 hours",
        images: [
          "https://images.unsplash.com/photo-1597953066321-9bf0e32348fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
        ],
        cast: ["Colm Wilkinson", "Patti LuPone"],
        directors: ["Trevor Nunn", "John Caird"],
        producers: ["Cameron Mackintosh"],
        production_companies: ["Cameron Mackintosh Ltd"],
        date_of_production: new Date("1980-09-24"),
        language: "English",
        genre: ["Musical", "Drama"],
        country: "United Kingdom",
        awards: [
          "Tony Award for Best Musical",
          "Olivier Award for Best New Musical",
        ],
        rating: 4.8,
        reviews: ["Unforgettable experience!", "Powerful performances!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Hamilton",
        composers: ["Lin-Manuel Miranda"],
        lyricists: ["Lin-Manuel Miranda"],
        book_writers: ["Lin-Manuel Miranda"],
        synopsis:
          "The story of founding father Alexander Hamilton, told through hip-hop and rap music.",
        duration: "2 hours 45 minutes",
        images: [
          "https://images.unsplash.com/photo-1519682718457-c82ce8296645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Lin-Manuel Miranda", "Phillipa Soo"],
        directors: ["Thomas Kail"],
        producers: ["Lin-Manuel Miranda", "Jeffrey Seller"],
        production_companies: [
          "The Public Theater",
          "Nevis Productions",
          "Fox Stage Productions",
        ],
        date_of_production: new Date("2015-01-20"),
        language: "English",
        genre: ["Musical", "Biography"],
        country: "United States",
        awards: ["Tony Award for Best Musical", "Pulitzer Prize for Drama"],
        rating: 4.9,
        reviews: ["Revolutionary!", "Brilliantly written!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Wicked",
        composers: ["Stephen Schwartz"],
        lyricists: ["Stephen Schwartz"],
        book_writers: ["Winnie Holzman"],
        synopsis: "The untold story of the Witches of Oz.",
        duration: "2 hours 45 minutes",
        images: [
          "https://images.unsplash.com/photo-1576724196706-3f23f51ea351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Idina Menzel", "Kristin Chenoweth"],
        directors: ["Joe Mantello"],
        producers: ["Universal Pictures"],
        production_companies: ["Universal Stage Productions"],
        date_of_production: new Date("2003-10-30"),
        language: "English",
        genre: ["Musical", "Fantasy"],
        country: "United States",
        awards: ["Tony Award for Best Musical"],
        rating: 4.7,
        reviews: ["Magical experience!", "Incredible performances!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "The Lion King",
        composers: ["Elton John", "Hans Zimmer"],
        lyricists: ["Tim Rice", "Lebo M"],
        book_writers: ["Roger Allers", "Irene Mecchi"],
        synopsis: "The journey of a young lion prince reclaiming his throne.",
        duration: "2 hours 30 minutes",
        images: [
          "https://images.unsplash.com/photo-1576724196831-c3469e6a67ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Donald Glover", "Beyoncé"],
        directors: ["Julie Taymor"],
        producers: ["Walt Disney Theatrical"],
        production_companies: ["Disney Theatrical Productions"],
        date_of_production: new Date("1997-07-08"),
        language: "English",
        genre: ["Musical", "Adventure"],
        country: "United States",
        awards: ["Tony Award for Best Musical"],
        rating: 4.6,
        reviews: ["Breathtaking show!", "Mesmerizing visuals!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Mamma Mia!",
        composers: ["Benny Andersson", "Björn Ulvaeus"],
        lyricists: ["Björn Ulvaeus", "Benny Andersson"],
        book_writers: ["Catherine Johnson"],
        synopsis:
          "A mother, a daughter, three possible dads, and a trip down the aisle you'll never forget.",
        duration: "2 hours 30 minutes",
        images: [
          "https://plus.unsplash.com/premium_photo-1684923604389-b63c611adf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Amanda Seyfried", "Meryl Streep"],
        directors: ["Phyllida Lloyd"],
        producers: ["Littlestar Services"],
        production_companies: ["Universal Pictures"],
        date_of_production: new Date("1999-04-06"),
        language: "English",
        genre: ["Musical", "Comedy"],
        country: "United Kingdom",
        awards: [],
        rating: 4.4,
        reviews: ["Feel-good entertainment!", "Catchy songs!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Hamilton",
        composers: ["Lin-Manuel Miranda"],
        lyricists: ["Lin-Manuel Miranda"],
        book_writers: ["Lin-Manuel Miranda"],
        synopsis: "The story of American Founding Father Alexander Hamilton.",
        duration: "2 hours 45 minutes",
        images: [
          "https://images.unsplash.com/photo-1571173069043-82a7a13cee9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Lin-Manuel Miranda", "Leslie Odom Jr."],
        directors: ["Thomas Kail"],
        producers: ["Jeffrey Seller"],
        production_companies: ["The Public Theater"],
        date_of_production: new Date("2015-01-20"),
        language: "English",
        genre: ["Musical", "Historical"],
        country: "United States",
        awards: ["Tony Award for Best Musical"],
        rating: 4.9,
        reviews: ["Revolutionary masterpiece!", "Brilliant storytelling!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Les Misérables",
        composers: ["Claude-Michel Schönberg"],
        lyricists: ["Herbert Kretzmer"],
        book_writers: ["Alain Boublil", "Claude-Michel Schönberg"],
        synopsis:
          "The story of Jean Valjean and his redemption in 19th-century France.",
        duration: "3 hours",
        images: [
          "https://images.unsplash.com/photo-1607873893945-b5920ac228f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        ],
        cast: ["Hugh Jackman", "Anne Hathaway"],
        directors: ["Trevor Nunn", "John Caird"],
        producers: ["Cameron Mackintosh"],
        production_companies: ["Cameron Mackintosh Ltd."],
        date_of_production: new Date("1980-09-28"),
        language: "English",
        genre: ["Musical", "Drama"],
        country: "United Kingdom",
        awards: ["Tony Award for Best Musical"],
        rating: 4.7,
        reviews: ["Emotional and powerful!", "Spectacular performances!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "The Phantom of the Opera",
        composers: ["Andrew Lloyd Webber"],
        lyricists: ["Charles Hart", "Richard Stilgoe"],
        book_writers: ["Andrew Lloyd Webber", "Richard Stilgoe"],
        synopsis:
          "A mysterious masked figure who lurks beneath the catacombs of the Paris Opera House.",
        duration: "2 hours 30 minutes",
        images: [
          "https://images.unsplash.com/photo-1587834423414-9545adae44ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Michael Crawford", "Sarah Brightman"],
        directors: ["Harold Prince"],
        producers: ["Cameron Mackintosh"],
        production_companies: ["The Really Useful Group"],
        date_of_production: new Date("1986-10-09"),
        language: "English",
        genre: ["Musical", "Romance"],
        country: "United Kingdom",
        awards: ["Tony Award for Best Musical"],
        rating: 4.8,
        reviews: ["Timeless classic!", "Unforgettable music!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
    ];
    for (let musical of musicals) {
      const newMusical = new musicalModel(musical);
      await newMusical.save();
    }
    console.log("Musical data seeded successfully!");
  } catch (error) {
    console.error("Error seeding musical data:", error);
  } finally {
    mongoose.disconnect();
  }
}
