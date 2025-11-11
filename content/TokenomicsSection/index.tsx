import { ToolTipPieChart } from "components/TooltipPieChart"

export const TokenomicsSection = () => {
  return (
    <div className=" bg-primaryPurple-900">
      <h2 className="pt-8 pb-4 text-3xl font-bold text-center text-white">Tokenomics</h2>
      <div className="flex justify-center gap-12 px-4 py-8 xs:flex-col">
        <ToolTipPieChart data={[
          { title: "QubeBridge Validators Rewards (25M)", value: 25, color: "#471614" },
		  { title: "Farm Staking Rewards (10M)", value: 10, color: "#d26560" },
		  { title: "Trading Rewards (5M)", value: 5, color: "#563a18" }
        ]} />
      </div>
      <div className="flex justify-center gap-16 pb-8 px-4 xs:flex-col xs:items-center">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-neutral-300">Token Symbol</span>
			<span className="text-lg text-white">XQST</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-neutral-300">Initial Supply</span>
			<span className="text-lg text-white">40M</span>
          </div>
        </div>
    </div>
  )
}
