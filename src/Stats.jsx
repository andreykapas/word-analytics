const Stats = ({ numberOfChars }) => {
  return (
    <section className="stats">
      <Stat description={'Words'} value={0} />
      <Stat description={'Characters'} value={numberOfChars} />
      <Stat description={'Instagram'} value={280} />
      <Stat description={'Facebook'} value={2200} />
    </section>
  );
};

const Stat = ({ description, value }) => {
  return (
    <section className="stat">
      <span className="stat__number">{value}</span>
      <h2 className="second-heading">{description}</h2>
    </section>
  );
};

export default Stats;
