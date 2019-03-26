import areaFunc from './area';
import courseFunc from './course';
import courseDurationFunc from './course-duration';
import submitStep1Func from './submit';

const step1Func = () => {
  areaFunc();
  courseFunc();
  courseDurationFunc();
  submitStep1Func();
};

export default step1Func;
