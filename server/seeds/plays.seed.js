import dotenv from "dotenv";
import mongoose from "mongoose";
import playModel from "../models/Play.model.js";

dotenv.config({ path: "./../.env" });

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DBURL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
    seedPlays();
  })
  .catch((error) => console.error("Failed to connect to DB:", error));

async function seedPlays() {
  try {
    const plays = [
      {
        title: "Romeo and Juliet",
        authors: ["William Shakespeare"],
        synopsis: "Tragic love story of two young lovers from feuding families",
        duration: "2 hours",
        images: [
          "https://images.unsplash.com/photo-1579539760267-b2e78d9d735e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhlYXRyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ],
        cast: ["Leonardo DiCaprio", "Claire Danes"],
        directors: ["Baz Luhrmann"],
        producers: ["Gabriella Martinelli"],
        production_companies: ["Bazmark Films"],
        date_of_production: new Date("1996-11-01"),
        genre: ["Drama", "Romance"],
        language: "English",
        country: "United States",
        awards: ["MTV Movie Award for Best Kiss"],
        rating: 4.3,
        reviews: ["Great adaptation of the classic play!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Hamlet",
        authors: ["William Shakespeare"],
        synopsis:
          "Tragic story of a young prince seeking revenge for his father's murder",
        duration: "3 hours",
        images: [
          "https://images.unsplash.com/photo-1558970439-add78fc68990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGhlYXRyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ],
        cast: ["Kenneth Branagh", "Kate Winslet"],
        directors: ["Kenneth Branagh"],
        producers: ["David Barron"],
        production_companies: ["Castle Rock Entertainment"],
        date_of_production: new Date("1996-12-25"),
        genre: ["Drama"],
        language: "English",
        country: "United Kingdom",
        awards: ["BAFTA Award for Best Adapted Screenplay"],
        rating: 4.5,
        reviews: ["A masterpiece of Shakespearean cinema!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "A Streetcar Named Desire",
        authors: ["Tennessee Williams"],
        synopsis:
          "Drama of a fading southern belle and her conflicts with brutish brother-in-law",
        duration: "2 hours 4 minutes",
        images: [
          "https://images.unsplash.com/photo-1516737488405-7b6d6868fad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHx0aGVhdHJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        ],
        cast: ["Vivien Leigh", "Marlon Brando"],
        directors: ["Elia Kazan"],
        producers: ["Charles K. Feldman"],
        production_companies: ["Warner Bros. Pictures"],
        date_of_production: new Date("1951-12-01"),
        genre: ["Drama"],
        language: "English",
        country: "United States",
        awards: ["Academy Award for Best Actress"],
        rating: 4.2,
        reviews: ["One of the greatest dramas of all time!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "The Importance of Being Earnest",
        authors: ["Oscar Wilde"],
        synopsis:
          "Two bachelors, Jack Worthing and Algernon Moncrieff, create alter egos named Ernest to escape their tiresome lives. However, they are each called upon to play the part of Ernest by the women they love, leading to a series of hilarious misunderstandings.",
        duration: "2 hours",
        images: [
          "https://images.unsplash.com/photo-1576544403918-c47d52572a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHRoZWF0cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        cast: [
          "Jack Worthing - Bob Smith",
          "Algernon Moncrieff - John Doe",
          "Cecily Cardew - Jane Doe",
        ],
        directors: ["Alice Johnson"],
        producers: ["Bob Smith"],
        production_companies: ["The Royal Shakespeare Company"],
        date_of_production: new Date("2022-02-01"),
        genre: ["Comedy"],
        language: "English",
        country: "United Kingdom",
        awards: ["Best Revival, Olivier Awards 2022"],
        rating: 4.2,
        reviews: ["A witty and entertaining play!"],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Macbeth Macbeth",
        authors: ["William Shakespeare"],
        synopsis:
          "Macbeth, a Scottish general, receives a prophecy from three witches that he will become king. He becomes consumed by ambition and, with the urging of his wife, Lady Macbeth, murders King Duncan and takes the throne. However, his guilt and paranoia lead to a series of murders and his eventual downfall.",
        duration: "2 hours 30 minutes",
        images: [
          "https://images.unsplash.com/photo-1578920570481-305090930f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80",
        ],
        cast: [
          "Macbeth",
          "Lady Macbeth",
          "Duncan",
          "Banquo",
          "Macduff",
          "Witches",
        ],
        directors: ["John Smith"],
        producers: ["Jane Doe"],
        production_companies: ["Example Productions"],
        date_of_production: new Date("2022-01-01"),
        genre: ["Tragedy"],
        language: "English",
        country: "United Kingdom",
        awards: ["Best Actor", "Best Actress", "Best Director"],
        rating: 4.5,
        reviews: [
          "A stunning performance of Shakespeare's classic!",
          "One of the best productions of Macbeth I've ever seen.",
          "Highly recommend this play to anyone who loves Shakespeare.",
        ],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Waiting for Godot",
        authors: ["Samuel Beckett"],
        synopsis:
          "Two men, Vladimir and Estragon, wait for someone named Godot, but Godot never appears.",
        duration: "2 hours",
        images: [
          "https://images.unsplash.com/photo-1571689298871-7ab64cebbc5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["Ian McKellen", "Patrick Stewart", "Hugh Jackman"],
        directors: ["Martin Scorsese"],
        producers: ["Steven Spielberg"],
        production_companies: ["DreamWorks"],
        date_of_production: new Date("2022-01-01"),
        genre: ["Absurdist", "Theatre of the Absurd"],
        language: "English",
        country: "United Kingdom",
        awards: ["Tony Award for Best Revival of a Play"],
        rating: 4.5,
        reviews: [
          "A mesmerizing performance!",
          "A must-watch for theatre lovers!",
        ],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "A Midsummer Night's Dream",
        authors: ["William Shakespeare"],
        synopsis:
          "A comedy play about the events surrounding the marriage of Theseus, the Duke of Athens, and Hippolyta, the Queen of the Amazons.",
        duration: "2 hours",
        images: [
          "https://images.unsplash.com/photo-1561444224-9ba05c6a93ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        ],
        cast: [
          "Theseus",
          "Hippolyta",
          "Egeus",
          "Hermia",
          "Lysander",
          "Demetrius",
          "Helena",
          "Oberon",
          "Titania",
          "Puck",
          "Bottom",
          "Quince",
          "Flute",
          "Snug",
          "Snout",
          "Starveling",
        ],
        directors: ["Peter Hall"],
        producers: ["Royal Shakespeare Company"],
        production_companies: ["BBC Television"],
        date_of_production: new Date("1981-12-31"),
        genre: ["Comedy", "Fantasy"],
        language: "English",
        country: "United Kingdom",
        awards: ["Tony Award for Best Revival of a Play"],
        rating: 8.1,
        reviews: [
          "This play is an absolute joy to watch, filled with humor and imagination.",
          "The performances are outstanding, especially from the actors playing Puck and Bottom.",
          "I highly recommend this production to anyone who loves Shakespeare or just wants to have a good time at the theater.",
        ],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Othello",
        authors: ["William Shakespeare"],
        synopsis:
          "Othello, a Moorish general in the Venetian army, is manipulated by his jealous and deceitful ensign Iago into believing that his wife, Desdemona, has been unfaithful.",
        duration: "2 hours 45 minutes",
        images: [
          "https://images.unsplash.com/photo-1529229504105-4ea795dcbf59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        ],
        cast: [
          "Othello: Denzel Washington",
          "Desdemona: Lupita Nyong'o",
          "Iago: Tom Hiddleston",
          "Emilia: Viola Davis",
          "Cassio: John Boyega",
        ],
        directors: ["Kenneth Branagh"],
        producers: ["Scott Rudin", "Denise Di Novi"],
        production_companies: ["Columbia Pictures", "20th Century Fox"],
        date_of_production: new Date("2017-12-15"),
        genre: ["Drama", "Tragedy"],
        language: "English",
        country: "United States",
        awards: [
          "Academy Award for Best Actor (Denzel Washington)",
          "Academy Award for Best Supporting Actress (Viola Davis)",
        ],
        rating: 4.8,
        reviews: [
          "A powerful and moving adaptation of Shakespeare's tragedy.",
          "The cast delivers some of the best performances of their careers.",
          "Visually stunning and emotionally gripping.",
          "A must-see for Shakespeare fans and moviegoers alike.",
        ],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "King Lear",
        authors: ["William Shakespeare"],
        synopsis:
          "King Lear of Britain descends into madness as he tries to divide his kingdom among his three daughters.",
        duration: "3 hours",
        images: [
          "https://images.unsplash.com/photo-1511715282680-fbf93a50e721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        ],
        cast: ["King Lear", "Cordelia", "Edgar", "Regan", "Goneril"],
        directors: ["Sam Mendes"],
        producers: ["Scott Rudin"],
        production_companies: ["Royal Shakespeare Company"],
        date_of_production: new Date("2022-06-15"),
        genre: ["Tragedy"],
        language: "English",
        country: "United Kingdom",
        awards: ["Tony Award for Best Revival of a Play"],
        rating: 8.5,
        reviews: [
          "Absolutely brilliant performance. One of the best productions of King Lear I've seen!",
          "The cast was amazing and the staging was very creative.",
          "I was blown away by this production. A must-see for any Shakespeare fan!",
        ],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
      {
        title: "Death of a Salesman",
        authors: ["Arthur Miller"],
        synopsis:
          "Willy Loman, an aging salesman, struggles to come to terms with his failed career and relationships, as he begins to lose touch with reality.",
        duration: "2h 30min",
        images: [
          "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80",
        ],
        cast: ["Philip Seymour Hoffman", "Andrew Garfield", "Linda Emond"],
        directors: ["Mike Nichols"],
        producers: ["Scott Rudin"],
        production_companies: ["Scott Rudin Productions"],
        date_of_production: new Date("2012-03-15"),
        genre: ["Tragedy", "Drama"],
        language: "English",
        country: "United States",
        awards: [
          "Tony Award for Best Revival of a Play",
          "Tony Award for Best Direction of a Play",
          "Drama Desk Award for Outstanding Revival of a Play",
        ],
        rating: 4.5,
        reviews: [
          "A powerful and moving portrayal of one man's struggle with his own mortality.",
          "The performances were top-notch, and the direction was masterful.",
          "An unforgettable theatrical experience that will leave you thinking long after the final curtain.",
        ],
        url: "https://res.cloudinary.com/dunbijg3t/video/upload/v1661181068/samples/sea-turtle.mp4",
      },
    ];
    for (let play of plays) {
      const newPlay = new playModel(play);
      await newPlay.save();
    }
    console.log("Play data seeded successfully!");
  } catch (error) {
    console.error("Error seeding play data:", error);
  } finally {
    mongoose.disconnect();
  }
}
