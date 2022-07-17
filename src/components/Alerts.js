import { AlertItem } from "./AlertItem";

export const Alerts = (props) => {
  console.log(props.alertData.alert.length);
  if (props.alertData.alert.length === 0) {
    return;
  }
  return (
    <div className="items-center justify-center flex">
      <div className="flex w-9/12 h-auto bg-light_primary dark:bg-dark_tertiary shadow-xl rounded-xl mt-5 justify-center p-5">
        <div className="flex w-11/12 h-2/3 transparent rounded-xl m-3 flex-col">
          <div className="w-full font-extrabold text-center pb-2 border-b-2 border-dark_primary tracking-wider">
            WEATHER ALERTS
          </div>
          {props.alertData.alert.map((el) => {
            return (
              <AlertItem
                expires={el.expires}
                headline={el.headline}
                category={el.category}
                desc={el.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
