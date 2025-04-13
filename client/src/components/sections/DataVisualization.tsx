import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

// Adaptive change data - showing transformation over time
const adaptationData = [
  { month: "Jan", traditional: 20, adaptive: 10 },
  { month: "Feb", traditional: 18, adaptive: 12 },
  { month: "Mar", traditional: 17, adaptive: 15 },
  { month: "Apr", traditional: 15, adaptive: 20 },
  { month: "May", traditional: 12, adaptive: 25 },
  { month: "Jun", traditional: 10, adaptive: 30 },
];

// Team performance data - showing improvement with adaptive approach
const teamPerformanceData = [
  { name: "Team A (Traditional)", value: 65 },
  { name: "Team B (Adaptive)", value: 85 },
];

// Success rate data - comparing traditional vs adaptive approaches
const successRateData = [
  { approach: "Planning", traditional: 80, adaptive: 60 },
  { approach: "Execution", traditional: 60, adaptive: 70 },
  { approach: "Evaluation", traditional: 70, adaptive: 65 },
  { approach: "Adaptation", traditional: 30, adaptive: 90 },
  { approach: "Innovation", traditional: 20, adaptive: 85 },
];

const COLORS = ["#0088FE", "#FF8042"];

const DataVisualization = () => {
  const [activeChart, setActiveChart] = useState<string>("adaptation");
  const [adaptivePercentage, setAdaptivePercentage] = useState(0);
  const [traditionalPercentage, setTraditionalPercentage] = useState(0);
  const [teamPerformancePercentage, setTeamPerformancePercentage] = useState({
    traditional: 0,
    adaptive: 0
  });
  
  // Animation for the adaptive/traditional balance pie chart
  useEffect(() => {
    const timer = setTimeout(() => {
      // Final values we want to reach
      const finalAdaptive = 75;
      const finalTraditional = 25;
      
      // Animate from 0 to final values
      let adaptiveCounter = 0;
      let traditionalCounter = 0;
      
      const interval = setInterval(() => {
        if (adaptiveCounter < finalAdaptive) {
          setAdaptivePercentage(prev => prev + 1);
          adaptiveCounter++;
        }
        
        if (traditionalCounter < finalTraditional) {
          setTraditionalPercentage(prev => prev + 1);
          traditionalCounter++;
        }
        
        if (adaptiveCounter >= finalAdaptive && traditionalCounter >= finalTraditional) {
          clearInterval(interval);
        }
      }, 30);
      
      return () => clearInterval(interval);
    }, 500); // Start after 500ms
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animation for team performance chart
  useEffect(() => {
    const timer = setTimeout(() => {
      // Final values
      const finalTraditional = 65;
      const finalAdaptive = 85;
      
      let traditionalCounter = 0;
      let adaptiveCounter = 0;
      
      const interval = setInterval(() => {
        if (traditionalCounter < finalTraditional) {
          setTeamPerformancePercentage(prev => ({
            ...prev,
            traditional: prev.traditional + 1
          }));
          traditionalCounter++;
        }
        
        if (adaptiveCounter < finalAdaptive) {
          setTeamPerformancePercentage(prev => ({
            ...prev,
            adaptive: prev.adaptive + 1
          }));
          adaptiveCounter++;
        }
        
        if (traditionalCounter >= finalTraditional && adaptiveCounter >= finalAdaptive) {
          clearInterval(interval);
        }
      }, 30);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Custom animation for the pie chart
  const animatedPieData = [
    { name: "Adaptive", value: adaptivePercentage },
    { name: "Traditional", value: traditionalPercentage }
  ];
  
  // Team performance animated data
  const animatedTeamData = [
    { name: "Team A (Traditional)", value: teamPerformancePercentage.traditional },
    { name: "Team B (Adaptive)", value: teamPerformancePercentage.adaptive }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Data-Driven Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Visualizing the Shift from Fixed to Flow
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-gray-700">
            See the measurable impact of adopting an adaptive mindset in organizations. These visualizations represent 
            aggregated data from our client engagements.
          </p>
        </motion.div>

        {/* Visualization selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeChart === "adaptation"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveChart("adaptation")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Adaptation Over Time
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeChart === "teamPerformance"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveChart("teamPerformance")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Team Performance
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeChart === "successRate"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveChart("successRate")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Success Rate Comparison
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeChart === "balancePie"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveChart("balancePie")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Adaptive-Traditional Balance
          </motion.button>
        </div>

        {/* Chart container with conditional rendering */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-[400px]">
            {activeChart === "adaptation" && (
              <>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Organizational Adaptation Over Time
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={adaptationData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="traditional"
                      name="Traditional Approach"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                      animationDuration={2000}
                      animationBegin={300}
                      isAnimationActive={true}
                    />
                    <Area
                      type="monotone"
                      dataKey="adaptive"
                      name="Adaptive Approach"
                      stackId="1"
                      stroke="#FF8042"
                      fill="#FF8042"
                      animationDuration={2000}
                      animationBegin={300}
                      isAnimationActive={true}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </>
            )}

            {activeChart === "teamPerformance" && (
              <>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Team Performance Based on Approach
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={animatedTeamData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip formatter={(value) => [`${value}%`, 'Performance']} />
                    <Legend />
                    <Bar
                      dataKey="value"
                      name="Performance Score"
                      fill="#0088FE"
                      animationDuration={2000}
                      animationBegin={300}
                      isAnimationActive={true}
                    >
                      {animatedTeamData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </>
            )}

            {activeChart === "successRate" && (
              <>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Success Rate in Different Process Areas
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={successRateData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="approach" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, '']} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="traditional"
                      name="Traditional Approach"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                      animationDuration={2000}
                      animationBegin={300}
                      isAnimationActive={true}
                    />
                    <Line
                      type="monotone"
                      dataKey="adaptive"
                      name="Adaptive Approach"
                      stroke="#FF8042"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                      animationDuration={2000}
                      animationBegin={300}
                      isAnimationActive={true}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </>
            )}

            {activeChart === "balancePie" && (
              <>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Optimal Adaptive-Traditional Approach Balance
                </h3>
                <div className="flex justify-center items-center h-full">
                  <div className="w-full md:w-1/2">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={animatedPieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          isAnimationActive={false} // We're controlling the animation manually
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {animatedPieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-4">
                  Our research shows that a 75/25 balance between adaptive and traditional approaches
                  yields optimal results in rapidly changing environments.
                </p>
              </>
            )}
          </div>
        </motion.div>

        {/* Insights and explanation */}
        <motion.div 
          className="bg-gray-50 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900">Key Insights</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <span>Organizations that embrace an adaptive approach show up to <span className="font-semibold">3x higher innovation rates</span> than those relying solely on traditional methodologies.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <span>Teams using adaptive frameworks demonstrate <span className="font-semibold">20% higher performance</span> in rapidly changing environments.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <span>The optimal balance of approximately <span className="font-semibold">75% adaptive</span> and <span className="font-semibold">25% traditional</span> approaches provides stability while enabling necessary flexibility.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <span>Organizations that transition from fixed to flow methodologies report <span className="font-semibold">30% improved change adoption</span> across their teams.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DataVisualization;