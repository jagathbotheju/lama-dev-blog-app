"use client";
import PuffLoader from "react-spinners/PuffLoader";

const LoadingPage = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <PuffLoader color="#36d7b7" />
    </div>
  );
};

export default LoadingPage;
