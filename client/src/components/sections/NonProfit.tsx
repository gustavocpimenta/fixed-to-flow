import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Calendar, Users, Lightbulb, Coffee } from "lucide-react";

const NonProfit = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full mb-6 text-sm font-medium"
            >
              Beyond Business
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Building Community Through Change</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Our mission extends beyond corporate transformation. We believe in creating spaces where people can connect, 
              learn, and grow together through the challenges of change.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 rounded-xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full z-0"></div>
            <div className="relative z-10">
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Non-Profit Initiatives</h3>
              <p className="text-gray-700 mb-6">
                We dedicate a portion of our resources to supporting communities navigating significant changes, 
                from career transitions to organizational shifts in the non-profit sector.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3 mt-1">
                    <Users className="h-4 w-4" />
                  </span>
                  <span>Free coaching sessions for non-profit leaders</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3 mt-1">
                    <Lightbulb className="h-4 w-4" />
                  </span>
                  <span>Workshop series on adaptive leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded mr-3 mt-1">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <span>Quarterly community forums on changemaking</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full z-0"></div>
            <div className="relative z-10">
              <Coffee className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cozy Sessions</h3>
              <p className="text-gray-700 mb-6">
                Intimate, thought-provoking gatherings where diverse minds discuss the future of work, 
                adaptability, and the human side of change.
              </p>
              <Card className="p-4 border-0 shadow-md bg-white mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Upcoming Session</h4>
                <p className="text-gray-600 mb-2">April 15, 2025 | 6:30 PM</p>
                <p className="text-gray-700 mb-3">Topic: "Reinvention as a Practice, Not an Event"</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Reserve a Spot
                </Button>
              </Card>
              <p className="text-sm text-gray-500 italic">
                Spaces are limited to ensure quality conversations. First-time attendees welcome!
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join us in creating spaces for meaningful connection and growth through change.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg">
            Join Our Community
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NonProfit;