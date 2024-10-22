import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function PatternIconTwo({ className, style }) {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <svg
      width="168"
      height="314"
      style={style}
      className={className}
      viewBox="0 0 168 314"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      className="animate spin"
        d="M124.78 148.843C127.712 148.336 129.938 148.27 130.953 148.248H131.548H132.055C133.025 148.248 135.318 148.314 138.338 148.843C143.298 149.57 150 151.245 155.181 154.97C151.433 149.769 149.78 143.047 149.052 138.089C148.567 135.18 148.479 132.954 148.479 131.94V131.345V130.838C148.479 129.869 148.545 127.577 149.074 124.558C149.802 119.599 151.477 112.9 155.203 107.721C150 111.467 143.276 113.12 138.338 113.847C135.428 114.354 133.179 114.42 132.165 114.42H131.57H131.548H131.041C130.071 114.42 127.778 114.354 124.758 113.847C119.798 113.098 113.095 111.445 107.915 107.721C111.662 112.922 113.316 119.643 114.043 124.58C114.551 127.489 114.617 129.736 114.617 130.728V131.345V131.852C114.617 132.822 114.55 135.114 114.021 138.133C113.294 143.069 111.618 149.769 107.893 154.948C113.095 151.201 119.82 149.548 124.758 148.821M111.949 131.323C105.534 120.062 95.9218 113.252 95.9218 113.252C100.463 108.073 103.153 102.938 103.153 102.938C103.153 102.938 108.312 100.25 113.492 95.7101C113.492 95.7101 120.304 105.297 131.57 111.732C142.835 105.319 149.647 95.7101 149.647 95.7101C154.828 100.25 159.965 102.938 159.965 102.938C159.965 102.938 162.655 108.095 167.196 113.252C167.196 113.252 157.606 120.062 151.169 131.323C157.606 142.584 167.196 149.394 167.196 149.394C162.655 154.573 159.965 159.73 159.965 159.73C159.965 159.73 154.806 162.418 149.647 166.958C149.647 166.958 142.835 157.35 131.57 150.937C120.304 157.35 113.492 166.958 113.492 166.958C108.312 162.418 103.153 159.73 103.153 159.73C103.153 159.73 100.463 154.573 95.9218 149.394C95.9218 149.394 105.534 142.584 111.949 131.323Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M131.592 122.596C136.42 122.596 140.322 126.541 140.3 131.367C140.3 136.193 136.354 140.072 131.526 140.072C126.698 140.05 122.796 136.127 122.818 131.301C122.84 126.475 126.764 122.596 131.592 122.596Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
      className="animate spin"
        d="M29.0784 244.553C32.0105 244.046 34.2373 243.98 35.2514 243.958H35.8467H36.3537C37.3237 243.958 39.6167 244.024 42.637 244.553C47.5973 245.28 54.299 246.955 59.4798 250.68C55.732 245.479 54.0785 238.757 53.351 233.799C52.866 230.89 52.7778 228.664 52.7778 227.65V227.055V227.033V226.526C52.7778 225.557 52.844 223.265 53.3731 220.246C54.1006 215.287 55.7761 208.588 59.5019 203.409C54.2991 207.133 47.5753 208.808 42.637 209.535C39.7269 210.042 37.4781 210.108 36.464 210.108H35.8687H35.8467H35.3397C34.3696 210.108 32.0766 210.042 29.0564 209.513C24.096 208.786 17.3943 207.111 12.2135 203.387C15.9613 208.565 17.6148 215.309 18.3423 220.246C18.8494 223.155 18.9156 225.402 18.9156 226.394V227.011V227.518C18.9156 228.488 18.8494 230.78 18.3203 233.799C17.5928 238.757 15.9172 245.457 12.1914 250.636C17.3722 246.889 24.1181 245.236 29.0564 244.509M16.2475 227.033C9.83218 215.772 0.220123 208.962 0.220123 208.962C4.76158 203.783 7.45125 198.648 7.45125 198.648C7.45125 198.648 12.6104 195.96 17.7912 191.42C17.7912 191.42 24.6033 201.029 35.8687 207.442C47.1342 201.029 53.9463 191.42 53.9463 191.42C59.1271 195.96 64.2636 198.648 64.2636 198.648C64.2636 198.648 66.9533 203.805 71.4948 208.962C71.4948 208.962 61.9047 215.772 55.4673 227.033C61.9047 238.294 71.4948 245.104 71.4948 245.104C66.9533 250.283 64.2636 255.44 64.2636 255.44C64.2636 255.44 59.105 258.128 53.9463 262.668C53.9463 262.668 47.1342 253.06 35.8687 246.647C24.6033 253.06 17.7912 262.668 17.7912 262.668C12.6104 258.128 7.45125 255.44 7.45125 255.44C7.45125 255.44 4.76158 250.283 0.220123 245.104C0.220123 245.104 9.83218 238.294 16.2475 227.033Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M28.6155 231.948C27.6675 230.537 27.0944 228.84 27.0944 227.011C27.1165 222.185 31.0406 218.284 35.8687 218.306C40.6967 218.328 44.5987 222.251 44.5767 227.077C44.5767 231.903 40.6305 235.804 35.8025 235.782C32.8042 235.782 30.1587 234.262 28.6155 231.948Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M140.454 247.374C137.787 244.487 134.899 242.195 131.526 240.278C128.131 242.195 125.265 244.487 122.597 247.374C122.046 247.991 121.032 249.203 120.525 249.864C125.088 253.545 128.285 257.93 130.512 262.823H132.518C134.766 257.93 137.941 253.545 142.505 249.864C141.998 249.203 141.006 247.991 140.432 247.374"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M122.597 207.023C125.265 209.91 128.153 212.202 131.526 214.119C134.899 212.202 137.787 209.91 140.454 207.023C141.028 206.406 142.02 205.194 142.527 204.533C137.963 200.852 134.766 196.467 132.54 191.574H130.534C128.307 196.467 125.11 200.852 120.547 204.533C121.032 205.194 122.046 206.406 122.619 207.023"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M151.72 218.262C148.832 220.929 146.539 223.816 144.621 227.187C146.539 230.581 148.832 233.446 151.72 236.113C152.337 236.686 153.55 237.677 154.211 238.184C157.893 233.622 162.28 230.427 167.174 228.201V226.196C162.28 223.948 157.893 220.774 154.211 216.213C153.55 216.697 152.337 217.711 151.72 218.284"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M111.354 236.113C114.242 233.446 116.535 230.559 118.453 227.187C116.535 223.816 114.242 220.929 111.354 218.262C110.737 217.689 109.524 216.697 108.862 216.191C105.181 220.752 100.794 223.926 95.8997 226.174V228.179C100.794 230.405 105.181 233.6 108.862 238.162C109.524 237.677 110.737 236.664 111.354 236.091"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M41.8872 303.416C40.0794 301.455 38.1394 299.912 35.8467 298.612C33.5539 299.912 31.6139 301.455 29.8061 303.416C29.4313 303.835 28.7476 304.65 28.4169 305.113C31.5033 307.603 33.664 310.556 35.1631 313.884H36.5302C38.0514 310.578 40.2115 307.625 43.2979 305.113C42.9672 304.672 42.284 303.835 41.8872 303.416Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M29.8061 276.133C31.6139 278.095 33.5539 279.637 35.8467 280.938C38.1394 279.637 40.0794 278.095 41.8872 276.133C42.262 275.715 42.9452 274.899 43.2979 274.436C40.2115 271.946 38.0514 268.993 36.5302 265.665H35.1631C33.6419 268.971 31.4813 271.924 28.4169 274.436C28.7476 274.877 29.4313 275.715 29.8061 276.133Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M49.493 283.736C47.5309 285.543 45.9878 287.483 44.6871 289.775C45.9878 292.067 47.5309 294.006 49.493 295.813C49.9118 296.188 50.7276 296.871 51.1906 297.201C53.6817 294.116 56.6358 291.956 59.9648 290.458V289.092C56.6579 287.571 53.7038 285.411 51.1906 282.348C50.7496 282.679 49.9118 283.362 49.493 283.736Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M22.2004 295.813C24.1625 294.006 25.7055 292.067 27.0062 289.775C25.7055 287.483 24.1625 285.543 22.2004 283.736C21.7815 283.362 20.9658 282.679 20.5028 282.348C18.0116 285.433 15.0575 287.593 11.7286 289.092V290.458C15.0354 291.978 17.9896 294.138 20.5028 297.201C20.9437 296.871 21.7815 296.188 22.2004 295.813Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M29.0784 53.1331C32.0105 52.6262 34.2373 52.5601 35.2514 52.5601H35.8467H36.3537C37.3237 52.5601 39.6167 52.6262 42.637 53.1551C47.5973 53.9044 54.299 55.5572 59.4798 59.2816C55.732 54.0807 54.0785 47.3592 53.351 42.4007C52.866 39.4917 52.7778 37.2659 52.7778 36.2521V35.6571V35.1503C52.7778 34.1806 52.844 31.8887 53.3731 28.8695C54.1006 23.911 55.7761 17.2115 59.5019 12.0326C54.2991 15.779 47.5753 17.4319 42.637 18.1591C39.7269 18.666 37.4781 18.7321 36.464 18.7541H35.8687H35.8467H35.3397C34.3696 18.7541 32.0766 18.688 29.0564 18.1591C24.096 17.4319 17.3943 15.757 12.2135 12.0326C15.9613 17.2335 17.6148 23.9551 18.3423 28.9136C18.8494 31.8225 18.9156 34.0484 18.9156 35.0621V35.6571V36.164C18.9156 37.1337 18.8494 39.4256 18.3203 42.4448C17.5928 47.3812 15.9172 54.0807 12.1914 59.2596C17.3722 55.5132 24.1181 53.8603 29.0564 53.1331M16.2475 35.613C9.83218 24.3517 0.220123 17.5421 0.220123 17.5421C4.76158 12.3632 7.45125 7.22839 7.45125 7.22839C7.45125 7.22839 12.6104 4.53978 17.7912 0C17.7912 0 24.6033 9.58643 35.8687 16.0215C47.1342 9.60847 53.9463 0 53.9463 0C59.1271 4.53978 64.2636 7.22839 64.2636 7.22839C64.2636 7.22839 66.9533 12.3852 71.4948 17.5421C71.4948 17.5421 61.9047 24.3517 55.4673 35.613C61.9047 46.8743 71.4948 53.684 71.4948 53.684C66.9533 58.8629 64.2636 63.9977 64.2636 63.9977C64.2636 63.9977 59.105 66.6863 53.9463 71.2261C53.9463 71.2261 47.1342 61.6176 35.8687 55.2046C24.6033 61.6176 17.7912 71.2261 17.7912 71.2261C12.6104 66.6863 7.45125 63.9977 7.45125 63.9977C7.45125 63.9977 4.76158 58.8409 0.220123 53.684C0.220123 53.684 9.83218 46.8743 16.2475 35.613Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
        className="animate spin"
      />
      <path
        d="M35.8907 26.8861C40.7187 26.9081 44.6208 30.8309 44.5987 35.6571C44.5987 40.4834 40.6525 44.3621 35.8245 44.3621C30.9964 44.3621 27.0944 40.4173 27.1165 35.591C27.1385 30.7648 31.0626 26.8861 35.8907 26.8861Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M140.454 55.9539C137.787 53.067 134.899 50.7751 131.526 48.8578C128.131 50.7751 125.265 53.067 122.597 55.9539C122.046 56.571 121.032 57.7831 120.525 58.4442C125.088 62.1245 128.285 66.51 130.512 71.4024H132.518C134.766 66.51 137.941 62.1245 142.505 58.4442C141.998 57.7831 141.006 56.571 140.432 55.9539"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M122.597 15.6025C125.265 18.4895 128.153 20.7814 131.526 22.6987C134.899 20.7814 137.787 18.4895 140.454 15.6025C141.028 14.9855 142.02 13.7734 142.527 13.1123C137.963 9.43195 134.766 5.04644 132.54 0.154053H130.534C128.307 5.04644 125.11 9.43195 120.547 13.1123C121.032 13.7734 122.046 14.9855 122.619 15.6025"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M151.72 26.842C148.832 29.5086 146.539 32.3955 144.621 35.7673C146.539 39.1391 148.832 42.026 151.72 44.6926C152.337 45.2656 153.55 46.2573 154.211 46.7641C157.893 42.2023 162.28 39.0289 167.174 36.781V34.7756C162.28 32.5498 157.893 29.3543 154.211 24.7925C153.55 25.2773 152.337 26.291 151.72 26.864"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M111.354 44.7146C114.242 42.0481 116.535 39.1611 118.453 35.7893C116.535 32.3955 114.242 29.5306 111.354 26.864C110.737 26.3131 109.524 25.2993 108.862 24.7925C105.181 29.3543 100.794 32.5498 95.8997 34.7756V36.781C100.794 39.0289 105.181 42.2023 108.862 46.7641C109.524 46.2793 110.737 45.2656 111.354 44.6926"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M33.5096 96.4593L35.7142 95.6218L37.9188 96.4593L45.0837 99.214V102.233V103.511L41.0492 107.588L35.7142 112.877L30.3793 107.588L26.3447 103.511V102.233V99.214L33.5096 96.4593Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M37.9188 166.209L35.7143 167.046L33.5097 166.209L26.3447 163.454V160.413V159.135L30.3793 155.08L35.7143 149.791L41.0492 155.08L45.0838 159.135L45.1058 160.413L45.0838 163.454L37.9188 166.209Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M0.815376 133.527L-4.19617e-05 131.323L0.815376 129.119L3.59318 121.979L6.61373 121.957H7.89257L11.9487 125.99L17.2621 131.323L11.9487 136.678L7.89257 140.689L6.61373 140.711L3.59318 140.689L0.815376 133.527Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M70.6131 129.119L71.4285 131.323L70.6131 133.527L67.8574 140.689L64.8148 140.711L63.5365 140.689L59.4798 136.678L54.189 131.323L59.4798 125.99L63.5365 121.957H64.8148L67.8574 121.979L70.6131 129.119Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M9.47982 108.227L10.4497 106.09L12.6102 105.098L19.6206 101.991L21.7811 104.128L22.6632 105.032L22.6853 110.762L22.6632 118.277L15.1452 118.321L9.41362 118.299L8.50939 117.395L6.371 115.235L9.47982 108.227Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M61.9487 154.441L60.9788 156.578L58.8404 157.548L51.8079 160.655L49.6695 158.518L48.7653 157.614L48.7432 151.906L48.7653 144.369L56.2833 144.347L62.0149 144.369L62.9191 145.273L65.0575 147.411L61.9487 154.441Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M12.6102 157.548L10.4497 156.578L9.47982 154.441L6.371 147.411L8.50939 145.273L9.41362 144.369L15.1452 144.347L22.6632 144.369L22.6853 151.906V157.614L21.7811 158.518L19.6206 160.655L12.6102 157.548Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M58.8183 105.098L60.9788 106.068L61.9487 108.227L65.0575 115.235L62.9191 117.395L62.0149 118.299L56.2833 118.321L48.7653 118.277L48.7432 110.762L48.7653 105.032L49.6695 104.15L51.8079 101.991L58.8183 105.098Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
      <path
        d="M41.9093 125.197L50.6173 125.241L44.4223 131.367L50.5732 137.56L41.8651 137.516L41.821 146.221L35.6922 140.05L29.4971 146.177L29.5413 137.472L20.8112 137.428L27.0062 131.301L20.8774 125.108L29.5854 125.13L29.6075 116.426L35.7584 122.618L41.9313 116.492L41.9093 125.197Z"
        fill={isDarkMode ? "#ffffff33":"#000"}
        fillOpacity={isDarkMode ? "":"0.1"}
      />
    </svg>
  );
}

export default PatternIconTwo;
