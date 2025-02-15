import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const cld = new Cloudinary({
  cloud: { cloudName },
});

interface VideoProps {
  video?: string;
}

const Video = ({ video }: VideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!video) return null;

  const cldVid = cld
    .video(`psi/${video}`)
    .setDeliveryType("upload")
    .format("auto");

  return (
    <AdvancedVideo
      cldVid={cldVid}
      autoPlay
      muted
      loop
      onLoadedData={() => setIsLoaded(true)}
      innerRef={(videoRef) => {
        if (videoRef) {
          videoRef.crossOrigin = "anonymous";
        }
      }}
      style={{ display: isLoaded ? "block" : "none" }}
    />
  );
};

export default Video;
