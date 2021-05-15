import React from "react";

const Download = () => {
  return (
    <section className="text-center">
      <a
        className="btn btn-danger"
        href="../assets/ureportapp.apk"
        download
        rel="noopener noreferrer"
        target="_blank"
      >
        DOWNLOAD APK
      </a>
    </section>
  );
};

export default Download;
