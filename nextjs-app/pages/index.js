
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Garden of Eden, Netherlands",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Garden of Eden 2, Netherlands",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {

  return <MeetupList meetups={props.meetups} />;
}

export function getStaticProps() {
  // fetch data from API
  return{
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

export default HomePage;
