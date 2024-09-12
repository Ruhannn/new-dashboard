import ActivityGraph from "./ActivityGraph";
import Card from "./Card";
import RecentTransactions from "./RecentTransactions";
import TopBar from "./TopBar";
import { UsageRadar } from "./UsageRadar";

export default function Dashboard() {
  return (
    <div className="pb-4 bg-white rounded-lg shadow">
      <TopBar />
      <div className="grid grid-cols-12 gap-3 px-4">
        <Card
          title="Gross Revenue"
          value="$120,054.24"
          pillText="2.75%"
          trend="up"
          period="From Jan 1st - Jul 31st"
        />
        <Card
          title="Avg Order"
          value="$27.97"
          pillText="1.01%"
          trend="down"
          period="From Jan 1st - Jul 31st"
        />
        <Card
          title="Trailing Year"
          value="$278,054.24"
          pillText="60.75%"
          trend="up"
          period="Previous 365 days"
        />
        <ActivityGraph />
        <UsageRadar />
        <RecentTransactions />
      </div>
    </div>
  );
}
