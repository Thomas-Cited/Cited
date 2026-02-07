import { motion } from 'framer-motion';

export function DynamicBackground() {
  return (
    <>
      {/* Subtle Gradient Background */}
      <div className="fixed inset-0 z-0 subtle-gradient" />
      
      {/* Very subtle animated orbs */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.04) 0%, transparent 60%)',
          filter: 'blur(80px)',
          top: '-20%',
          right: '-10%',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(88, 86, 214, 0.03) 0%, transparent 60%)',
          filter: 'blur(60px)',
          bottom: '-10%',
          left: '-5%',
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </>
  );
}
