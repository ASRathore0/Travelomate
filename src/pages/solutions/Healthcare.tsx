import { motion } from 'motion/react';

export default function Healthcare() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-black mb-6 text-foreground">Healthcare Staffing & Recruiting</h1>
        <p className="text-xl text-foreground/70 mb-12">
          Efficiently coordinate travel for traveling nurses, locum tenens, and healthcare professionals to get them where they're needed most.
        </p>
      </motion.div>
    </div>
  );
}
