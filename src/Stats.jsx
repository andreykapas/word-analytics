const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat description={'Words'} value={stats.numberOfWords} />
      <Stat description={'Characters'} value={stats.numberOfChars} />
      <Stat description={'Instagram'} value={280 - stats.numberOfChars} />
      <Stat description={'Facebook'} value={2200 - stats.numberOfChars} />
    </section>
  );
};

const Stat = ({ description, value }) => {
  return (
    <section className="stat">
      <span
        className={`stat__number ${value < 0 ? 'stat__number--limit' : ''}`}
      >
        {value}
      </span>
      <h2 className="second-heading">{description}</h2>
    </section>
  );
};

export default Stats;
