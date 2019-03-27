import areaFunc from './area';
import courseFunc from './course';
import courseDurationFunc from './course-duration';
import submitStep1Func from './submit';

const step1Func = (row) => {
  areaFunc(row[3]);
  courseFunc(row[1]);
  courseDurationFunc(row[2]);
  submitStep1Func();
};

export default step1Func;
