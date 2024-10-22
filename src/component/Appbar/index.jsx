import React from 'react';
import { FaTachometerAlt, FaShoppingCart, FaChartBar, FaFileAlt, FaLayerGroup } from 'react-icons/fa';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <FaTachometerAlt />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <FaShoppingCart />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <FaChartBar />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <FaFileAlt />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <FaFileAlt />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <FaLayerGroup />,
  },
];

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = ({ height }) => (
  <div className={`bg-gray-200 rounded-lg h-${height}`}></div>
);

export default function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  const demoWindow = window ? window() : undefined;

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <ul className="mt-2">
          {NAVIGATION.map((item, index) => (
            <li key={index} className="flex items-center py-2">
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 p-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5"></div>
          <div className="col-span-12">
            <Skeleton height="14" />
          </div>
          <div className="col-span-12">
            <Skeleton height="14" />
          </div>
          <div className="col-span-4">
            <Skeleton height="100" />
          </div>
          <div className="col-span-8">
            <Skeleton height="100" />
          </div>
          <div className="col-span-12">
            <Skeleton height="150" />
          </div>
          <div className="col-span-12">
            <Skeleton height="14" />
          </div>
          <div className="col-span-3">
            <Skeleton height="100" />
          </div>
          <div className="col-span-3">
            <Skeleton height="100" />
          </div>
          <div className="col-span-3">
            <Skeleton height="100" />
          </div>
          <div className="col-span-3">
            <Skeleton height="100" />
          </div>
        </div>
      </main>
    </div>
  );
}
