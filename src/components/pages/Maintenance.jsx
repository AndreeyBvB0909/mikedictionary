import React from "react";
import { Wrench, Cog } from "lucide-react";
import { motion } from "framer-motion";
import "../../styles/Maintenance.css";

function Maintenance() {
  return (
    <div className="maintenance-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="maintenance-content"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="icon-wrapper"
        >
          <Cog className="icon-cog" />
        </motion.div>

        <div className="robot-wrapper">
          <div className="robot-body">
            <Wrench className="icon-wrench" />
          </div>
          <p className="maintenance-title">Under Maintenance</p>
          <p className="maintenance-message">
            Our robot is getting some upgrades and new features are being added.
            We’ll be back soon with improvements and exciting updates!
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Maintenance;
