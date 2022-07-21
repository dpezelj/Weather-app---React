export const AlertItem = ({ expires, headline, event, desc }) => {
  return (
    <div className="items-center  justify-center flex" key={expires}>
      <div className="w-9/12 p-5 bg-light_tertiary dark:bg-dark_secondary shadow-xl rounded-xl mt-5">
        <div className="w-full font-extrabold text-center pb-2 border-b-2 border-dark_primary  tracking-wider text-dark-primary dark:text-yellow-500 uppercase">
          {event}
        </div>
        <div className="text-center font-medium pt-3">{headline}</div>

        <div className="text-center font-normal ">{desc}</div>
      </div>
    </div>
  );
};
