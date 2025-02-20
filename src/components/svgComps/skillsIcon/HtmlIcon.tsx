import React from 'react'

type Props = {}

export default function HtmlIcon({}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 32 32"
      
    >
      <title>{"file_type_html"}</title>
      <path
        d="M5.902 27.201 3.655 2h24.69l-2.25 25.197L15.985 30 5.902 27.201z"
        style={{
          fill: "#e44f26",
        }}
      />
      <path
        d="m16 27.858 8.17-2.265 1.922-21.532H16v23.797z"
        style={{
          fill: "#f1662a",
        }}
      />
      <path
        d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16v-3.091zM16 21.434l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004v-3.216z"
        style={{
          fill: "#ebebeb",
        }}
      />
      <path
        d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83H15.989zM15.989 7.151V10.242h7.466l.062-.694.141-1.567.074-.83h-7.743z"
        style={{
          fill: "#fff",
        }}
      />
    </svg>
  );
}