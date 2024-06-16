import { motion } from 'framer-motion';

const pathVariants = {
  hidden: (pathLength: number) => ({
    strokeDasharray: `${pathLength} ${pathLength}`,
    // strokeDasharray: `3,3`,
    strokeDashoffset: pathLength,
  }),
  visible: ([pathLength, delay]: [number, number]) => ({
  // visible: (pathLength: number) => ({
    strokeDasharray: `${pathLength} ${pathLength}`,
    strokeDashoffset: [pathLength, -pathLength],
    transition: {
      duration: 10, 
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay,
    },
  }),
};

const HeroLines = () => {
  const pathLengths = [1021.9495849609375, 1021.9495849609375, 1021.9495849609375];
  const baseDelay = 5;

  const paths = [
    { id: "3", d: "M460.488 186.199C460.488 197.732 454.239 208.748 442.872 218.798C431.506 228.848 415.044 237.91 394.68 245.525C353.954 260.755 297.676 270.18 235.5 270.18C173.324 270.18 117.046 260.755 76.3201 245.525C55.9564 237.91 39.4943 228.848 28.1277 218.798C16.7607 208.748 10.5117 197.732 10.5117 186.199C10.5117 174.667 16.7607 163.65 28.1277 153.6C39.4943 143.55 55.9564 134.489 76.3201 126.873C117.046 111.644 173.324 102.219 235.5 102.219C297.676 102.219 353.954 111.644 394.68 126.873C415.044 134.489 431.506 143.55 442.872 153.6C454.239 163.65 460.488 174.667 460.488 186.199Z", opacity: "0.8", strokeWidth: "0.8", gradientId: "paint0_linear_1288_31501" },
    { id: "2", d: "M430.345 68.9808C435.782 78.3983 435.573 90.5215 430.472 104.422C425.371 118.32 415.392 133.959 401.35 150.367C373.267 183.181 328.975 219.026 275.128 250.114C221.281 281.203 168.093 301.638 125.634 309.551C104.404 313.508 85.8699 314.331 71.2832 311.799C56.6947 309.267 46.0912 303.387 40.654 293.969C35.2168 284.552 35.4259 272.428 40.5271 258.528C45.6277 244.63 55.6076 228.991 69.6495 212.583C97.7319 179.769 142.024 143.924 195.871 112.836C249.718 81.7471 302.906 61.3117 345.365 53.3985C366.595 49.4417 385.129 48.6185 399.716 51.1505C414.304 53.6828 424.908 59.5633 430.345 68.9808Z", opacity: "1", strokeWidth: "0.8", gradientId: "paint1_linear_1288_31501" },
    { id: "1", d: "M430.345 293.969C424.908 303.387 414.304 309.267 399.716 311.799C385.129 314.331 366.595 313.508 345.365 309.551C302.906 301.638 249.718 281.203 195.871 250.114C142.024 219.026 97.7319 183.181 69.6495 150.367C55.6076 133.959 45.6277 118.32 40.5271 104.422C35.4259 90.5215 35.2168 78.3983 40.654 68.9808C46.0912 59.5633 56.6948 53.6828 71.2832 51.1505C85.8699 48.6185 104.404 49.4417 125.634 53.3985C168.093 61.3117 221.281 81.747 275.128 112.836C328.975 143.924 373.267 179.769 401.35 212.583C415.392 228.991 425.371 244.63 430.472 258.528C435.573 272.428 435.782 284.552 430.345 293.969Z", opacity: "0.5", strokeWidth: "0.8", gradientId: "paint2_linear_1288_31501" }
  ];

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <svg width="100%" height="100%" viewBox="0 0 471 363" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="paint0_linear_1288_31501" x1="188.5" y1="102.543" x2="188.5" y2="271.004" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.1"/>
            <stop offset="1" stop-color="white" stop-opacity="0.6"/>
          </linearGradient>
          <linearGradient id="paint1_linear_1288_31501" x1="148.746" y1="113.193" x2="228.253" y2="250.905" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.1"/>
            <stop offset="1" stop-color="white" stop-opacity="0.6"/>
          </linearGradient>
          <linearGradient id="paint2_linear_1288_31501" x1="228.253" y1="113.193" x2="148.746" y2="250.905" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.1"/>
            <stop offset="1" stop-color="white" stop-opacity="0.6"/>
          </linearGradient>
        </defs>
        <g id="heroLines-nodash">
          {paths.map((path, index) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke={`url(#${path.gradientId})`}
              strokeWidth={path.strokeWidth}
              opacity={path.opacity}
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              custom={[pathLengths[index], index * baseDelay]}
              // custom={pathLengths[index]}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default HeroLines;