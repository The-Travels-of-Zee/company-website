// app/api/FeaturedProject/route.js

export async function GET() {
  return Response.json([
    {
      title: "AI Website Design",
      image: "./static/slack.png",
      live: "#",
      created_at: "2024-05-01",
      updated_at: "2024-05-02",
    },
    {
      title: "Mobile App Concept",
      image: "./static/dropbox.png",
      live: "#",
      created_at: "2024-05-03",
      updated_at: "2024-05-04",
    },
    {
      title: "Desktop App Concept",
      image: "./static/spotify.png",
      live: "#",
      created_at: "2024-05-03",
      updated_at: "2024-05-04",
    },
    {
      title: "Desktop App Concept",
      image: "./static/stripe.png",
      live: "#",
      created_at: "2024-05-03",
      updated_at: "2024-05-04",
    },
  ]);
}
