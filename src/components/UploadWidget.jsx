import { useEffect, useRef } from "react";

export default function UploadWidget() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dsjvjkupo",
        uploadPreset: "pvk2zuzh",
      },
      function (err, res) {
        console.log(res);
      }
    );
  }, []);

  return <button onClick={() => widgetRef.current.open()}>Select Image</button>;
}
