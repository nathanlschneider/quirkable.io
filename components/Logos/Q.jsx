const Q = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={236}
    height={214}
    {...props}
  >
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        d="M160.934 164.846c-16.556 12.605-39.401 15.756-59.501 6.228-28.694-13.601-40.929-47.887-27.328-76.581 13.602-28.694 47.888-40.928 76.582-27.328 24.095 11.422 36.584 37.431 31.914 62.465 10.704-36.318-6.224-75.994-41.422-92.679C102.21 18.48 55.604 35.185 37.08 74.263c-18.523 39.078-1.949 85.731 37.02 104.202 29.804 14.127 64.076 7.678 86.834-13.619Z"
        clipRule="evenodd"
      />
    </g>
    <g filter="url(#b)">
      <path
        d="m215.44 174.48-80.553-10.756a39.592 39.592 0 0 1-4.389-.586l-.564-.075.02-.033a40.323 40.323 0 0 1-13.152-5.252c-18.344-11.371-24.34-34.897-13.393-52.548 10.946-17.65 34.691-22.74 53.034-11.37a40.328 40.328 0 0 1 10.554 9.443l.196-.317 48.247 71.494Z"
      />
      <path
        d="m215.44 174.48-80.553-10.756a39.592 39.592 0 0 1-4.389-.586l-.564-.075.02-.033a40.323 40.323 0 0 1-13.152-5.252c-18.344-11.371-24.34-34.897-13.393-52.548 10.946-17.65 34.691-22.74 53.034-11.37a40.328 40.328 0 0 1 10.554 9.443l.196-.317 48.247 71.494Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={164.286}
        height={164.563}
        x={25.497}
        y={29.427}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_102_7" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_102_7"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={125.501}
        height={94.682}
        x={93.938}
        y={87.798}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_102_7" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_102_7"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default Q
