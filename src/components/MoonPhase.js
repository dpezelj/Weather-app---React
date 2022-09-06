
const headerAttr = [
    "flex",
    "items-center",
    "justify-around",
    "bg-black",
    "bg-opacity-20",
    "shadow-xl",
    "rounded-xl",
    "p-5",
    "text-slate-300"
  ];
export const MoonPhase = ({phase}) => {
       
   return (
        <div className={headerAttr.join(" ")}>
            <img src={`/moon_phases/${phase.toLowerCase().split(' ').join('_')}.png`} style={{height: "5rem"}}/>
            <div className="text-xl font-bold uppercase ml-5">{phase}</div>
        </div>
    )
}