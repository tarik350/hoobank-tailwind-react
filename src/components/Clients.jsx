import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="w-full relative text-white">
      <div className="flex md:justify-between  flex-col sm:flex-row items-center">
        {clients.map((client, index) => (
          <div
            key={client.id}
            className={`w-[200px] ${
              index === clients.length - 1 ? "" : "mb-6 sm:mb-0"
            }`}
          >
            <img className="object-contain w-full" src={client.logo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
