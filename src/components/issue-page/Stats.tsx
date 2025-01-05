import { Card, CardContent } from "@/components/ui/card";
import NumberTicker from "@/components/ui/number-ticker";

const stats = [
  { value: <div className="text-5xl font-extrabold tracking-tighter"><NumberTicker value={330000000} className="text-green-800" />+</div>, label: "tennis balls produced annually" },
  { value: <div className="text-5xl font-extrabold tracking-tighter"><NumberTicker value={400} className="text-green-800" />+</div>, label: "years to break down" },
  { value: <div className="text-5xl font-extrabold tracking-tighter"><NumberTicker value={1} className="text-green-800" />. <NumberTicker value={2} className="text-green-800" />lbs</div>, label: "carbon emission per ball" },
  { value: <div className="text-5xl font-extrabold tracking-tighter"><NumberTicker value={70000} className="text-green-800" />+</div>, label: "balls used at US Open annually" },
];

export function Stats() {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-6 py-12 md:py-24">
      <div className="text-center space-y-4 py-6 mx-auto">
        <h4 className="text-6xl w-full font-bold mb-2 text-balance mx-auto tracking-tighter">
          The Extent of Waste
        </h4>
      </div>
      <div className="grid grid-cols-1 w-[80%] mt-[5%]">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-none p-5">
            <CardContent className="p-0">
              <div className="flex flex-col items-center justify-center text-center">
                {stat.value}
                <span className="text-sm mt-1">
                  {stat.label}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}