interface Props extends React.HTMLProps<HTMLDivElement> {
  filters: string[];
  onFilterSelect: (filter: string) => void;
  onFilterReset: () => void;
  activeFilter: string;
}

export const Filters: React.FC<Props> = (props) => {
  const { filters, onFilterSelect, onFilterReset, activeFilter, className } =
    props;

  const btnClass = "bg-slate-400 px-4 py-2 rounded-full text-white";

  return (
    <div className={`${className}`}>
      <ul className="flex flex-wrap">
        {filters.map((filter) => (
          <li key={filter} className={`mr-5 `}>
            <button
              className={`${btnClass} ${
                filter === activeFilter ? "bg-yellow-800" : "text-white"
              }`}
              onClick={() => onFilterSelect(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
        <li>
          <button className={btnClass} onClick={onFilterReset}>
            all
          </button>
        </li>
      </ul>
    </div>
  );
};
