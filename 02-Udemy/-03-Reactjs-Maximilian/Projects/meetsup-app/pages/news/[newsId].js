import { useRouter } from "next/router";

const DetailsPage = function () {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>The Details page</h1>;
};

export default DetailsPage;
