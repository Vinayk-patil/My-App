import Image from "next/image";

// Reusable Image Component
const CustomImage = ({ src, alt, width, height, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 20}   // Default width if not passed
      height={height || 20} // Default height if not passed
      className={className}  // Optional additional classes
    />
  );
};

export default CustomImage;
