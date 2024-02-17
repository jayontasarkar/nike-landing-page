import ServiceCard from '../components/ServiceCard';
import { services } from '../constants';

const Services = () => {
  return (
    <section className="flex flex-wrap justify-center max-container gap-9">
      {services.map((service, idx) => (
        <ServiceCard {...service} key={idx} />
      ))}
    </section>
  );
};

export default Services;
