import xlsx from 'node-xlsx';

const readExcel = (path) => {
  return xlsx.parse(path);
};

export default readExcel;
