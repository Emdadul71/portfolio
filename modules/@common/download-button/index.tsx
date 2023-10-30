import React from "react";

interface propTypes {
  classes?: {
    root: any;
  };
}
const DownloadButton = ({ classes }: propTypes) => {
  const handleDownload = () => {
    const cvFilePath = "Emdadul Hoque CV.pdf";
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.download = "Emdadul Hoque CV.pdf";
    link.click();
  };
  return (
    <button
      onClick={handleDownload}
      className={`btn  rounded-md ${classes?.root ? classes.root : ``}`}
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
