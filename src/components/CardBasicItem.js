export const CardBasicItem = (data) => {
  return (
    <div className="flex justify-between border-b-2 border-dark_primary p-2 font-bold">
      <div>{data?.name}</div>
      <div className="flex bg-light_secondary dark:bg-dark_primary rounded-xl px-3">
        {data?.value} {data?.unit}
      </div>
    </div>
  );
};
