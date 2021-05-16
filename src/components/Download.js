import React from "react";
import ureportapp from "../assets/ureportapp.apk";

const Download = () => {
  return (
    <section className="text-center">
      <a
        className="btn btn-danger"
        href={`${ureportapp}`}
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
