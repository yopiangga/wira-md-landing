import { FaLocationArrow } from "react-icons/fa";

export function JobPositionSection() {
  return (
    <div
      className="flex justify-center min-h-[700px] bg-dark-300"
      id="role-user"
    >
      <div className="w-11/12 py-20">
        <div className="text-center">
          <h5 className="">Role</h5>
          <h2 className="text-5xl font-[500] mt-4">
            <span className="text-primary">Segmentation User</span> which
            <br /> Operate in <span className="text-primary">WIRA MD</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-16">
          <Item
            number="01"
            title="Operator"
            description="Responsible for operating the WIRA MD system add and upload data ct scan patient to classify stroke patients using deep learning."
          />
          <Item
            number="02"
            title="Doctor"
            description="Responsible for checking the results of the classification of stroke patients using the WIRA MD system."
          />
        </div>
      </div>
    </div>
  );
}

function Item({ number, title, description }) {
  return (
    <div className="bg-dark-100 p-8 flex gap-4 lg:col-span-6 col-span-12 rounded-xl justify-between">
      <div>
        <h3 className="text-2xl">{number}</h3>
      </div>
      <div className="text-left grow">
        <h3 className="text-2xl font-[500]">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="rounded-full p-4 bg-dark-300 flex justify-center items-center hover:text-primary">
          <FaLocationArrow size={14} />
        </div>
      </div>
    </div>
  );
}
