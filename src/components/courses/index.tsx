import {
  CoursesInner,
  CoursesInnerWrapper,
  CoursesTitle,
} from "./courses.styled";
import CoursesCard from "./CoursesCard";
import first from "/assets/first.png";
import second from "/assets/second.png";
import thrird from "/assets/thrird.png";
import five from "/assets/five.png";
import thrid from "/assets/thrid.png";
import last from "/assets/last.png";

const Courses = () => {
  return (
    <div style={{ paddingBottom: "40px" }}>
      <CoursesTitle>Biz orgatadigan kurslar</CoursesTitle>
      <CoursesInner>
        <CoursesInnerWrapper>
          <div className="firstLineCourse">
            <CoursesCard
              heght="273px"
              width="381px"
              name="Dasturlash"
              url={first}
            />
            <CoursesCard
              heght="273px"
              width="482px"
              name="Dizayn"
              url={second}
            />
          </div>
          <div className="secondLineCourse">
            <CoursesCard
              heght="273px"
              width="482px"
              name="Logistika broketligi"
              url={thrird}
            />
            <CoursesCard
              heght="273px"
              width="381px"
              name="Videomontaj va maxsus effektlar"
              url={five}
            />
          </div>
        </CoursesInnerWrapper>
        <div className="verticalLine">
          <CoursesCard
            heght="336px"
            width="280px"
            name="Marketing"
            url={thrid}
          />
          <CoursesCard heght="210px" width="280px" name="" url={last} />
        </div>
      </CoursesInner>
    </div>
  );
};

export default Courses;
