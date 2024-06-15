import { motion } from 'framer-motion';
import { Light } from '../Light';
import { Divider } from '../Divider';
import { Dark } from '../Dark';
import { useTheme } from '@/components/HOC/ThemeContext';

export const LightDarkToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();
  
  const OuterVariants = {
    light: {
      backgroundImage: "linear-gradient(190deg,rgba(21,23,33,0.10),rgba(21,23,33,0.04))",
      boxShadow: "0 0 9px rgba(142,171,192,0.08), inset 1px 0 1px rgba(21,23,33,0.08), inset 0 0 2px rgba(21,23,33,0.16)",
    },
    dark: {
      backgroundImage: "linear-gradient(190deg,rgba(21,23,33,0.40),rgba(21,23,33,0.01))",
      boxShadow: "0 0 9px rgba(142,171,192,0.08), inset 1px 0 1px rgba(21,23,33,0.16), inset 0 0 2px rgba(21,23,33,0.16)",
    },
  };
  const SwitchVariants = {
    light: {
      backgroundImage: "linear-gradient(200deg,rgba(255,255,255,0.85),rgba(255,255,255,0.3))",
      boxShadow: "inset 3px 0 1px 0 rgba(21,23,33,0.04), inset -6px 0 0 rgba(21,23,33,0.15), -2px 0 4px rgba(21,23,33,0), 2px 0 4px rgba(21,23,33,0.2)",
    },
    dark: {
      backgroundImage: "linear-gradient(200deg,rgba(21,23,33,0.50),rgba(21,23,33,0.1))",
      boxShadow: "inset -3px 0 2px 0 rgba(21,23,33,0.45), inset 6px 0 0 rgba(21,23,33,0.5), -2px 0 4px rgba(21,23,33,0), 0 2px 5px rgba(21,23,33,0.5)",
    },
  };

  return (
    <div className="flex items-center" key="toggleSwitch">
      <label htmlFor="toggle" className="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value="" id="toggle" className="sr-only peer" checked={darkMode} onChange={toggleTheme} />
        <motion.div 
          className="h-[64px] p-2 rounded-[25px] z-[-1]"
          key="toggleSwitchOuter"
          variants={OuterVariants}
          animate={darkMode ? "dark" : "light"}
          transition={{ duration: 0.3 }}
          >
          <motion.div 
            className="flex space-between justify-center items-center w-[96px] h-full bg-transparent dark:bg-transparent peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-[18px] peer"
            key="toggleSwitchInner"
            variants={SwitchVariants}
            animate={darkMode ? "dark" : "light"}
            transition={{ duration: 0.3 }}
            >
            <motion.div className={`w-full flex justify-center items-center transition-all delay-150 duration-300 ${darkMode ? 'text-white/30 translate-x-[3px]' : 'text-blurple-900 '}`}><Light className={`${darkMode ? 'drop-shadow-none' : 'drop-shadow-[0_0_6px_rgba(82,100,255,0.4)]' }`} /></motion.div>
            <motion.div className="w-[2px] flex justify-center items-center"><Divider /></motion.div>
            <motion.div className={`w-full flex justify-center items-center transition-all delay-150 duration-300 ${darkMode ? 'text-blurple-900 ' : 'text-midnight-900/40 translate-x-[-3px]'}`}><Dark className={`${darkMode ? 'drop-shadow-[0_0_6px_rgba(82,100,255,0.8)]' : 'drop-shadow-none' }`} /></motion.div>
          </motion.div>
        </motion.div>
      </label>
    </div>
  );
};