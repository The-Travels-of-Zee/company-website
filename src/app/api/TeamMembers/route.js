// app/api/TeamMembers/route.js

export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Alice Johnson",
      image: "https://via.placeholder.com/400x387",
      facebook: "https://facebook.com/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
      instagram: "https://instagram.com/alicejohnson"
    },
    {
      id: 2,
      name: "Mark Thompson",
      image: "https://via.placeholder.com/400x387",
      facebook: "https://facebook.com/markthompson",
      twitter: "https://twitter.com/markthompson",
      instagram: "https://instagram.com/markthompson"
    },
    {
      id: 3,
      name: "Sara Lee",
      image: "https://via.placeholder.com/400x387",
      facebook: "https://facebook.com/saralee",
      twitter: "https://twitter.com/saralee",
      instagram: "https://instagram.com/saralee"
    }
  ]);
}
