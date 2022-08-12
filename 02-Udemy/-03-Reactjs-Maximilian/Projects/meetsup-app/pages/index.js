import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://thumbs.dreamstime.com/z/nuture-green-tree-nice-128219037.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://thumbs.dreamstime.com/z/nuture-green-tree-nice-128219037.jpg",
    address: "Some address 10, 56456 Some City",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
