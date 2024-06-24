import imageTailwindcss from "src/assets/image/tailwindcss.png";
import imageReact from "src/assets/image/react.png";
import imageNextjs from "src/assets/image/nextjs.png";
import imageNodejs from "src/assets/image/nodejs.png";
import imageMongoDB from "src/assets/image/mongodb.svg";
import imageTensorflow from "src/assets/image/tensorflow.png";
import imageMysql from "src/assets/image/mysql.png";
import imagePython from "src/assets/image/python.png";

export function TechnologySection() {
  return (
    <div
      className="flex justify-center bg-dark-300 min-h-[700px]"
      id="technology"
    >
      <div className="w-11/12 grid grid-cols-12 lg:gap-10 py-20">
        <div className="text-left lg:col-span-4 col-span-12">
          <h5 className="">Technology</h5>
          <h2 className="text-5xl font-[500] mt-4">
            For Build System <br /> WIRA{" "}
            <span className="text-primary">MD Stroke Classificaton</span>
          </h2>
        </div>
        <div className="lg:col-span-8 col-span-12 lg:mt-0 mt-6">
          <div className="grid grid-cols-12 gap-4">
            <Item title="React JS" image={imageReact} />
            <Item title="Next JS" image={imageNextjs} />
            <Item title="Tailwind CSS" image={imageTailwindcss} />
            <Item title="Node JS" image={imageNodejs} />
            <Item title="Mongo DB" image={imageMongoDB} />
            <Item title="React Native" image={imageReact} />
            <Item title="Python" image={imagePython} />
            <Item title="Tensorflow" image={imageTensorflow} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ title, image }) {
  return (
    <div className="p-8 bg-dark-100 rounded-2xl lg:col-span-3 col-span-6">
      <div className="w-full h-28 p-4 flex justify-center items-center">
        <img src={image} className="object-contain h-28" />
      </div>
      <h3 className="text-xl font-[500] mt-6">{title}</h3>
    </div>
  );
}
