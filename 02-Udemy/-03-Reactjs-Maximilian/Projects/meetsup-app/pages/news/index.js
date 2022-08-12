import Link from "next/link";

const NewsPage = function () {
  return (
    <>
      <h1>The News page</h1>

      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-fremework">
            NextJS Is A Great Framwork
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
};

export default NewsPage;
