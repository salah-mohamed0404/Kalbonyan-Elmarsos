import { courses } from "../../../store/data";
import classes from "./Certificates.module.css";

function Certificates() {
  const renderCertificate = (course) => (
    <li key={course.name}>
      <div>
        <a className="link" href={course.certificateURL} target="blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M11 8h-7v-1h7v1zm0 2h-7v1h7v-1zm8.692-.939c-.628-.436-.544-.327-.782-1.034-.099-.295-.384-.496-.705-.496h-.003c-.773.003-.64.044-1.265-.394-.129-.092-.283-.137-.437-.137-.154 0-.308.045-.438.137-.629.442-.492.398-1.265.394h-.003c-.321 0-.606.201-.705.496-.238.71-.156.6-.781 1.034-.198.137-.308.353-.308.578l.037.222c.242.708.242.572 0 1.278l-.037.222c0 .224.11.441.309.578.625.434.545.325.781 1.033.099.296.384.495.705.495h.003c.773-.003.64-.045 1.265.394.129.093.283.139.437.139.154 0 .308-.046.437-.138.625-.439.49-.397 1.265-.394h.003c.321 0 .606-.199.705-.495.238-.708.154-.599.782-1.033.198-.137.308-.355.308-.579l-.037-.222c-.242-.71-.24-.573 0-1.278l.037-.222c0-.225-.11-.443-.308-.578zm-3.192 2.939c-.828 0-1.5-.672-1.5-1.5 0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5c0 .828-.672 1.5-1.5 1.5zm1.241 3.008l.021-.008h1.238v7l-2.479-1.499-2.521 1.499v-7h1.231c.415.291.69.5 1.269.5.484 0 .931-.203 1.241-.492zm-17.741-13.008v17h12v-2h-10v-13h20v13h-1v2h3v-17h-24zm8 11h-4v1h4v-1z" />
          </svg>
        </a>
      </div>

      <div>
        <h3>
          <a className="link" href={course.certificateURL} target="blank">
            {course.name}
          </a>
          <p>{course.description}</p>
        </h3>
        <span>
          {course.campany} {course.mentor && `(${course.mentor})`}
        </span>
      </div>
    </li>
  );

  return (
    <ul className={classes["certificates-list"]}>
      {courses.map((course) => renderCertificate(course))}
    </ul>
  );
}

export default Certificates;
