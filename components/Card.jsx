import Image from "next/image";
import Link from "next/link";
import PlatformIcon from "./PlatformIcon";

const Card = (props) => {
  const [image, name, description, platform] = props;
  return (
    <div>
      <Image src={image} width={200} height={150} />
      <PlatformIcon platform={platform} />
      <div className="card_name">{name}</div>
      <div className="card_description">{description}</div>
      <div className="card_meta">
        <div className="card_meta_download_amt"></div>
        <Link className="card_meta_download_link"></Link>
      </div>
    </div>
  );
};

export default Card;
