import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.MeetupData.image}
      title={props.MeetupData.title}
      address={props.MeetupData.address}
      description={props.MeetupData.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      MeetupData: {
        image:
          "https://thumbs.dreamstime.com/z/nuture-green-tree-nice-128219037.jpg",
        id: meetupId,
        title: "First meetup",
        address: "Some address 5, Some City",
        description: "he meetup description",
      },
    },
  };
}

export default MeetupDetails;
