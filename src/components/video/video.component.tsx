import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName,
  },
});

interface VideoProps {
  video?: string;
}

const Video = (props: VideoProps) => {
  const { video } = props;
  return <AdvancedVideo cldVid={cld.video(`psi/${video}`).quality("auto")} />;
};

export default Video;
